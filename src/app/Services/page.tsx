import Link from "next/link";
import cs from "../../Images/CS.png";
import SS from "../../Images/SS.png";
import HS from "../../Images/HS.png";
import OS from "../../Images/OS.png";

import Image from "next/image";
export default function Services() {
  const communityServices = [
    {
      title: "Community First Choice (CFC)",
      service:
        "Community First Choice (CFC) services are designed to support you in staying in your own home or with your family. You and your family have the flexibility to decide when these services are needed. Staff can provide transportation, assist you in learning new skills, and help manage medical needs. They offer support for daily activities and health-related tasks, whether through hands-on assistance, supervision, or reminders. Staff are also there to help you develop skills for self-care.",
    },
    {
      title: "Host Home/Companion Care (FC)",
      service:
        "Host Home/Companion Care (FC) provides a living arrangement with a family or individual who supports your needs. The foster care provider helps you learn new skills, manage medical needs, and travel to places you wish to go. This service requires a level of independence so that you can remain safe without continuous supervision.",
    },
    {
      title: "Supervised Living (SL)",
      service:
        "Supervised Living (SL) is a group home setting shared with two other residents, where overnight staff may be permitted to sleep. The staff are there to assist you in learning new skills, providing transportation, and supporting your medical needs.",
    },
    {
      title: "Residential Support Services (RSS)",
      service:
        "Residential Support Services (RSS) provide a group home environment with three other residents, offering 24-hour support. Staff are available to assist you in learning new skills, providing transportation, and managing medical needs.",
    },
  ];
  const specializedServices = [
    {
      title: "Psychology services",
      service:
        "Psychology services are available when you need someone to talk to or help you manage emotions that feel overwhelming.",
    },
    {
      title: "Occupational Therapy",
      service:
        "Occupational Therapy is provided when a doctor recommends a therapist to assist with adaptive equipment or specific therapies.",
    },
    {
      title: "Physical Therapy",
      service:
        "Physical Therapy is offered if a doctor determines that direct therapy or adaptive equipment could help with activities like walking.",
    },
    {
      title: "Speech Therapy",
      service:
        "Speech Therapy is provided when a doctor believes you need support in expressing your needs to others.",
    },
    {
      title: "Social Work",
      service:
        "Social Work offers assistance in managing personal challenges and improving relationships with others.",
    },
  ];
  const healthServices = [
    {
      title: "Nursing services",
      service:
        "Nursing services are available to help you maintain your health. Nurses coordinate with doctors, help you understand your health needs, and ensure all medical requirements are met, including health check-ups as necessary.",
    },
    {
      title: "Audiology services",
      service:
        "Audiology services are provided when a doctor recommends specialized assistance with hearing.",
    },
    {
      title: "Dietary services",
      service:
        "Dietary services offer support for weight management or specialized diets (such as a diabetic diet) to help you stay healthy.",
    },
    {
      title: "Dental Services",
      service:
        "Dental services ensure you can visit a dentist as needed, with up to $1,000 in annual coverage.",
    },
    {
      title: "Adaptive Aids",
      service:
        "Adaptive Aids are available when a doctor or therapist recommends a specific item, such as multivitamins, gloves, or glasses, to support your needs.",
    },
  ];
  const otherServices = [
    {
      title: "Day Habilitation",
      service:
        "Day Habilitation offers daytime activities where staff assist you in building friendships, supporting therapeutic needs, and exploring places you’d like to visit",
    },
    {
      title: "Supported Employment",
      service:
        "Supported Employment is available through staff assistance to help you maintain your job.",
    },
    {
      title: "Minor Home Modifications",
      service:
        "Minor Home Modifications can be arranged to help you stay in your home by making adjustments such as adding bathroom rails or widening doorways for wheelchair access. These modifications require prior approval from TDMHR and a recommendation from a therapist or doctor.",
    },
    {
      title: "Respite services",
      service:
        "Respite services are available if you receive supported home living assistance, offering temporary support in your home,or a respite provider's residence.",
    },
  ];
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center mt-5 shelterBlue display-2 font">
        Our Services
      </div>
      <div className="row justify-content-center fs-4 font lead fst-italic">
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
                    More Details{" "}
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
                    More Details{" "}
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
                    person's health.
                  </p>
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
