export default function communityServices() {
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

  return (
    <div className="container-fluid ">
      <div className="row justify-content-center mt-3">
        <div className="text-center display-4 font shelterBlue">
          Community Living Services
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 fs-4 fst-italic text-center font lead">
            Community living services are a range of services that help people
            with disabilities or special needs live more independently in their
            communities
          </div>
        </div>
        {communityServices.map((service) => (
          <div key={service.title} className="col-10 m-3">
            <div className="card">
              <h5 className="card-header text-success">{service.title}</h5>
              <div className="card-body">
                <p className="card-text lead">{service.service}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
