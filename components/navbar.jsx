import { Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function LayoutNavbar() {
  return (
    <>
      <Navbar className="navbar-expand-lg bg-body">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/images/p.gif" width={50} height={50}></Image>
            </a>
          </Link>
        </div>
      </Navbar>
    </>
  );
}
