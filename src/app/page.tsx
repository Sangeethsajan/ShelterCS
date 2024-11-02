import { url } from "inspector";
import ShelterCSBanner from "../Images/ShelterBanner.png";
import Image from "next/image";
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
    </div>
  );
}
