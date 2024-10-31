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
            <span className="fs-1 fw-bold">Shelter</span>
            <span className="fs-1 fw-light"> Community Services.</span>
          </div>
          <div className="fs-3 fw-light mt-2">
            Empowering Lives with Compassionate Care and Support Services,
            Tailored to Foster Independence and Well-being.
          </div>
        </div>
      </div>
    </div>
  );
}
