import Link from "next/link";
import cs from "../../Images/CS.png";
import SS from "../../Images/SS.png";
import HS from "../../Images/HS.png";
import OS from "../../Images/OS.png";

export default function Services() {
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center mt-5 shelterBlue text-center display-2 font">
        Our Services
      </div>
      <div className="row text-center justify-content-center fs-4 font lead fst-italic">
        Empowering Your Independence with Personalized Support and Solutions.
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-5 m-3">
          <div className="card mb-3 h-100">
            <div className="row g-0 h-100">
              <div
                className="col-md-4"
                style={{
                  backgroundImage: `url(${cs.src})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title fs-2 font">
                    Community Living Services
                  </h5>
                  <p className="card-text lead">
                    Community living services are a range of services that help
                    people with disabilities or special needs live more
                    independently in their communities
                  </p>
                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/community-living-services"
                  >
                    More Details
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 m-3">
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
                  <p className="card-text lead">
                    Specialized healthcare services are medical services that
                    focus on specific areas of medicine or conditions such as
                    Psychology services, Physical Therapy, Occupational Therapy
                    etc.
                  </p>
                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/specialized-services"
                  >
                    More Details
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 m-3">
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
                  <p className="card-text lead">
                    Health care services are any services that relate to the
                    diagnosis, prevention, or treatment of a human disease or
                    impairment. They can also include the assessment of a
                    person&apos;s health.
                  </p>
                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/health-services"
                  >
                    More Details
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 m-3">
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
                  <p className="card-text lead">
                    We have other plenty of serives available such as services
                    that offer offers daytime activities. Assists you in keeping
                    your job and minor Home Modifications.
                  </p>
                  <Link
                    className="stretched-link btn btn-success"
                    href="/Services/other-services"
                  >
                    More Details
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
