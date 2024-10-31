import Link from "next/link";
import SCSLogo from "../../Images/SCSLogo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="navbar navbar-lg navbar-expand-lg bg-light">
      <div className="container-fluid p-3 ms-lg-5">
        <Link className="navbar-brand shelterGreen" href="#">
          <Image src={SCSLogo} height={100} alt="Picture of the author" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Hello
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end me-lg-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
