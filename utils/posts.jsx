import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

const posts_directory = path.join(process.cwd(), "posts", "posts");
const pages_directory = path.join(process.cwd(), "posts", "pages");

/**
 * Compare two dates.
 *
 * @param {*} { date: a }
 * @param {*} { date: b }
 * @return {*}
 */
function dateCmp({ date: a }, { date: b }) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}

/**
 * Get posts from a
 *
 * @param {string} directory
 * @param {number} [start=0]
 * @param {number} [end=10]
 * @param {string} [prefix=""]
 * @param {function} [sort=dateCmp]
 * @return {*}
 */
function getPostsFromDir(
  directory,
  start = 0,
  end = 10,
  prefix = "",
  sort = dateCmp
) {
  // Get file names under /posts
  const file_names = fs.readdirSync(directory);
  const all_posts_data = file_names
    .filter((file_name) => {
      // Make sure filename starts with prefix.
      return file_name.startsWith(prefix);
    })
    .map((file_name) => {
      // Remove ".md" from file name to get id
      const id = file_name.replace(/\.md$/, "");

      // Read markdown file as string
      const full_path = path.join(directory, file_name);
      const file_contents = fs.readFileSync(full_path, "utf8");

      // Use gray-matter to parse the post metadata section
      const matter_result = matter(file_contents);

      // Combine the data with the id
      return {
        id,
        ...matter_result.data,
      };
    });

  // Sort posts by date
  let sorted = all_posts_data.sort(sort);

  // Filter out posts not in the range
  sorted = sorted.slice(start, end);

  // Return only the data
  return sorted;
}

/**
 * Get a rendered markdown file.
 *
 * @param {string} directory
 * @param {string} id
 * @return {*}
 */
async function getMarkdownData(directory, id) {
  const full_path = path.join(directory, `${id}.md`);
  const file_contents = fs.readFileSync(full_path, "utf8");

  // Use gray-matter to parse the post metadata section
  const matter_result = matter(file_contents);

  // Use remark to convert markdown into HTML string
  const processed_content = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // *Parse* the raw HTML strings embedded in the tree
    .use(rehypeStringify)
    .process(matter_result.content);
  const content_html = processed_content.toString();

  // Combine the data with the id
  return {
    id,
    content_html,
    ...matter_result.data,
  };
}

/**
 * Get a post's rendered markdown.
 *
 * @export
 * @param {string} id
 * @return {*}
 */
export function getPostData(id) {
  return getMarkdownData(posts_directory, id);
}

/**
 *
 *
 * @export
 * @return {*}
 */
export function getAllPostIds() {
  const file_names = fs.readdirSync(posts_directory);
  return file_names.map((file_name) => {
    return {
      params: {
        id: file_name.replace(/\.md$/, ""),
      },
    };
  });
}

/**
 * Get a page's data.
 *
 * @export
 * @param {*} id
 * @return {*}
 */
export async function getPageData(id) {
  return await getMarkdownData(pages_directory, id);
}

/**
 * Get sorted post titles.
 *
 * @export
 * @param {number} [start=0]
 * @param {number} [end=10]
 * @return {*}
 */
export function getSortedPostsData(start = 0, end = 10) {
  return getPostsFromDir(posts_directory, start, end);
}

export function getLayoutPostData() {
  const totalPosts = getAllPostIds().length;
  return { column: getSortedPostsData(0, 5), totalPosts: totalPosts };
}
