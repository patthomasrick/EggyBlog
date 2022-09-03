import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Breadcrumbs from "./breadcrumbs";
import Column from "./column";
import Footer from "./footer";
import Header from "./header";
import LayoutNavbar from "./navbar";

export default function Layout({
  title = "Untitled",
  description = "",
  subtitle = "",
  crumbs = [],
  layoutData,
  children,
}) {
  const router = useRouter();

  return (
    <>
      <Header title={title} description={description} shortNameHidden={true} />

      <div className="row w-100 mx-0">
        {/* Left column */}
        <div className="col-lg-4 col-xl-3 bg-primary text-light px-3 order-last order-lg-first">
          <Column posts={layoutData.column} />
        </div>

        {/* Main content */}
        <div className="col min-vh-100">
          {/* Navbar */}
          <LayoutNavbar />

          <div className="container" style={{ maxWidth: "48em" }}>
            {/* Breadcrumbs */}
            <Container>
              <Breadcrumbs crumbs={crumbs} />
            </Container>

            <motion.div
              key={router.route}
              initial="contentInitial"
              animate="contentAnimate"
              transition={{ duration: 0.5 }}
              variants={{
                contentInitial: { opacity: 0 },
                contentAnimate: { opacity: 1 },
              }}
            >
              {/* Title block */}
              <div className="container layout-header">
                <h1 id="title" className="title">
                  {title}
                </h1>
                <h2 id="subtitle" className="subtitle h6">
                  {subtitle}
                </h2>
              </div>

              {/* Main */}
              <Container id="content" className="content text-justify">
                {children}
              </Container>
            </motion.div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
