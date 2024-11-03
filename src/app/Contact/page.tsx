import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="row justify-content-center font display-2 shelterBlue mt-5">
        Contact US
      </div>
      <div className="row justify-content-center font fs-2 shelterBlue mt-1">
        We are available at
      </div>
      <div className="row justify-content-center fw-bold font fs-2 shelterGreen text-center">
        Dallas, Austin, Houston, Longview
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-3">
          <div className="card fs-5">
            <div className="card-header fw-bold">Phone Number</div>
            <div className="card-body">
              <Link
                style={{ textDecoration: "none" }}
                className="shelterBlue"
                href="tel:+14697780051"
              >
                +1 469 778 0051
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card fs-5">
            <div className="card-header fw-bold"> Email</div>
            <div className="card-body">
              <Link
                style={{ textDecoration: "none" }}
                className="shelterBlue"
                href="mailto:sheltercs@unicareusa.com"
              >
                Sheltercs@unicareusa.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
