import { Container } from "react-bootstrap";
import Breadcrumbs from "./breadcrumbs";
import Column from "./column";
import Footer from "./footer";
import Header from "./header";
import LayoutNavbar from "./navbar";

export default function Layout({
  title = "Untitled",
  subtitle = "",
  crumbs = [],
  layoutData,
  children,
}) {
  return (
    <>
      <Header title={title} />

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

            {/* Title block */}
            <Container className="">
              <h1 className="title">{title}</h1>
              <h2 className="subtitle">{subtitle}</h2>
            </Container>

            {/* Main */}
            <Container className="content text-justify">{children}</Container>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
