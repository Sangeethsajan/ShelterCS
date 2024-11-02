import { url } from "inspector";
import CS from "../Images/CS.png";
import SS from "../Images/SS.png";
import HS from "../Images/HS.png";
import OS from "../Images/OS.png";
import ShelterCSBanner from "../Images/ShelterBanner.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          backgroundImage: `url(${ShelterCSBanner.src})`,
          backgroundSize: "cover",
          height: "400px",
        }}
      >
        <div className="col-12 col-lg-6 ms-lg-5 ms-4 font">
          <div className="mt-lg-5 mt-3">
            <span className="display-2 fw-bold">Shelter</span>
            <span className="display-2 fw-light"> Community Services.</span>
          </div>
          <div className="fs-3 fw-light mt-2">
            Empowering Lives with Compassionate Care and Support Services,
            Tailored to Foster Independence and Well-being.
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-3 m-3">
          <div className="card border-0">
            <div className="card-body">
              <h3 className="card-text font shelterGreen">
                <i className="bi bi-person-arms-up"></i> Who We Are?
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 m-3">
          <div className="card border-0">
            <div className="card-body">
              <h3 className="card-text font shelterGreen">
                <i className="bi bi-person-hearts"></i> What We Do?
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 m-3">
          <div className="card border-0">
            <div className="card-body">
              <h3 className="card-text font shelterGreen">
                <i className="bi bi-people-fill"></i> How We Help You?
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="display-2 text-center font shelterGreen">We Offer</div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4 m-1 justify-content-center">
          <div className="card mb-3 h-100">
            <div className="row g-0 h-100">
              <div
                className="col-md-4"
                style={{
                  backgroundImage: `url(${CS.src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title fs-2 font">
                    Community Living Services
                  </h5>

                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/community-living-services"
                  >
                    More Details{" "}
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-1">
          <div className="card mb-3 h-100">
            <div className="row g-0 h-100">
              <div
                className="col-md-4"
                style={{
                  backgroundImage: `url(${SS.src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title fs-2 font">Specialized Services</h5>

                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/specialized-services"
                  >
                    More Details{" "}
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-1">
          <div className="card mb-3 h-100">
            <div className="row g-0 h-100">
              <div
                className="col-md-4"
                style={{
                  backgroundImage: `url(${HS.src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title fs-2 font">Health Services</h5>

                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/health-services"
                  >
                    More Details{" "}
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-1">
          <div className="card mb-3 h-100">
            <div className="row g-0 h-100">
              <div
                className="col-md-4"
                style={{
                  backgroundImage: `url(${OS.src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title fs-2 font">Other Services</h5>

                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/other-services"
                  >
                    More Details{" "}
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
