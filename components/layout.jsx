import { Container } from "react-bootstrap";
import Column from "./column";
import Footer from "./footer";
import Header from "./header";
import LayoutNavbar from "./navbar";

export default function Layout({ title, subtitle, children }) {
  return (
    <>
      <Header title={title} />

      <div className="row g-0">
        {/* Left column */}
        <div className="col-lg-4 col-xl-3 bg-primary text-light px-3 order-last order-lg-first">
          <Column />
        </div>

        {/* Main content */}
        <div className="col min-vh-100">
          {/* Navbar */}
          <LayoutNavbar />

          {/* Title block */}
          <Container className="my-5 ps-5 ">
            <h1 className="title">{title ? title : "Eggy Blog"}</h1>
            <h2 className="subtitle">
              {subtitle ? subtitle : "A blog about eggy"}
            </h2>
          </Container>

          {/* Main */}
          <Container className="content ps-5">{children}</Container>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
