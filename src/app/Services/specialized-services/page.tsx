export default function specializedServices() {
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
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center mt-3">
        <div className="text-center display-4 font shelterBlue">
          Specialized Services
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 fs-4 fst-italic text-center font lead">
            Specialized healthcare services are medical services that focus on
            specific areas of medicine or conditions such as Psychology
            services, Physical Therapy, Occupational Therapy etc.
          </div>
        </div>
        {specializedServices.map((service) => (
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
