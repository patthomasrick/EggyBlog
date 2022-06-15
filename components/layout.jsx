import { Button, Container } from "react-bootstrap";
import Header from "./header";
import LayoutNavbar from "./navbar";
import Column from "./column";

export default function Layout({ title, subtitle, children }) {
  return (
    <>
      <Header></Header>

      <div className="row g-0">
        <div
          className="col-lg-4 col-xl-3 d-none d-lg-block bg-dark text-white px-3"
          style={{ minHeight: "100vh" }}
        >
          <Column></Column>
        </div>
        <div className="col">
          <LayoutNavbar></LayoutNavbar>

          <Container className="my-5 ps-5">
            <h1 className="title">{title ? title : "Eggy Blog"}</h1>
            <h2 className="subtitle">
              {subtitle ? subtitle : "A blog about eggy"}
            </h2>
          </Container>
          <Container className="content ps-5">{children}</Container>
        </div>
      </div>
    </>
  );
}
