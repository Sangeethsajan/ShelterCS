import Link from "next/link";
import Image from "next/image";
import SCSLogo from "../../Images/SCSLogo.png";
export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start text-muted">
        <section className="mt-3">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 align-items-cente col-lg-4 col-xl-3 mx-auto r">
                <Link className="navbar-brand shelterGreen" href="/">
                  <Image
                    src={SCSLogo}
                    height={100}
                    alt="Picture of the author"
                  />
                </Link>

                <p className="lead font fs-6">
                  Empowering Lives with Compassionate Care and Support Services,
                  Tailored to Foster Independence and Well-being.
                </p>
                <p>
                  A{" "}
                  <Link
                    style={{ textDecoration: "none" }}
                    className="shelterBlue fs-5 font text-center"
                    href="https://unicareusa.com"
                  >
                    Unicare
                  </Link>{" "}
                  Company
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <p>
                  <Link href="/Services/community-living-services">
                    Community Living Services
                  </Link>
                </p>
                <p>
                  <Link href="/Services/specialized-services">
                    Specialized Services
                  </Link>
                </p>
                <p>
                  <Link href="/Services/health-services">Health Services</Link>
                </p>
                <p>
                  <Link href="/Services/other-services">Other Services</Link>
                </p>
              </div>

              <div
                style={{ textDecoration: "none" }}
                className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4"
              >
                <h6 className="text-uppercase fw-bold">Quick Contact</h6>
                <p>
                  Phone
                  <br /> <Link href="tel:+14697780051">+1 469 778 0051</Link>
                </p>
                <p>
                  Email
                  <br />
                  <Link href="mailto:sheltercs@unicareusa.com">
                    sheltercs@unicareusa.com
                  </Link>
                </p>
                <p>
                  <span>Our Locations</span>
                  <br />
                  <span className="fw-bold">
                    Dallas, Austin, Houston, Longview
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-1">
          © 2024 Copyright:{" "}
          <a
            style={{ textDecoration: "none" }}
            className="text-reset fw-bold"
            href="https://unicareusa.com"
          >
            Unicareusa.com
          </a>
        </div>
      </footer>
    </div>
  );
}
