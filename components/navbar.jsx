import { Navbar } from "react-bootstrap";
import Image from "next/image";

export default function LayoutNavbar() {
  return (
    <>
      <Navbar className="navbar-expand-lg bg-light ps-5">
        <div className="container-fluid">
          <Navbar.Brand href="#">
            <Image src="/images/p.gif" width={50} height={50}></Image>
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
}
