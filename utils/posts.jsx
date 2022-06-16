import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const posts_directory = path.join(process.cwd(), "posts", "posts");
const pages_directory = path.join(process.cwd(), "posts", "pages");

function dateCmp({ date: a }, { date: b }) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}

function getPostsFromDir(directory, prefix = "", sort = dateCmp) {
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
  return all_posts_data.sort(sort);
}

async function getMarkdownData(directory, id) {
  const full_path = path.join(directory, `${id}.md`);
  const file_contents = fs.readFileSync(full_path, "utf8");

  // Use gray-matter to parse the post metadata section
  const matter_result = matter(file_contents);

  // Use remark to convert markdown into HTML string
  const processed_content = await remark()
    .use(html)
    .process(matter_result.content);
  const content_html = processed_content.toString();

  // Combine the data with the id
  return {
    id,
    content_html,
    ...matter_result.data,
  };
}

export function getPostData(id) {
  return getMarkdownData(posts_directory, id);
}

export function getAllPostIds() {
  const file_names = fs.readdirSync(posts_directory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return file_names.map((file_name) => {
    return {
      params: {
        id: file_name.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPageData(id) {
  return await getMarkdownData(pages_directory, id);
}

export function getSortedPostsData() {
  return getPostsFromDir(posts_directory);
}
