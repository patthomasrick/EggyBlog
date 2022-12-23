import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function LayoutNavbar() {
  return (
    <>
      <Navbar
        className="navbar-expand-lg bg-body"
        style={{ height: '32px' }}
      ></Navbar>
    </>
  );
}
