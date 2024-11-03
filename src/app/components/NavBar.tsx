import Link from "next/link";
import SCSLogo from "../../Images/SCSLogo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="navbar navbar-lg navbar-expand-lg bg-light">
      <div className="container-fluid p-3 ms-lg-5">
        <Link className="navbar-brand shelterGreen" href="/">
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 col-lg-8 justify-content-center">
            <div className="row text-center">
              <div className="font fs-6 fw-bold shelterBlue">CONTACT US ON</div>
              <div className=" ">
                <Link
                  style={{ textDecoration: "none" }}
                  className="shelterBlue font fw-bold fs-2"
                  href="tel:+14697780051"
                >
                  +1 469 778 0051
                </Link>
              </div>
              <div className="font shelterBlue fw-normal fst-italic fs-4">
                "Unified Care for all your healthcare needs"
              </div>
            </div>
          </ul>
          <ul className="navbar-nav fw-normal fs-4 font mb-2 mb-lg-0 col-lg-4 me-lg-5 justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
