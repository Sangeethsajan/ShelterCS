export default function healthServices() {
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

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        <div className="text-center display-4 font shelterBlue">
          Health Services
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 fs-4 fst-italic text-center font lead">
            Health care services are any services that relate to the diagnosis,
            prevention, or treatment of a human disease or impairment. They can
            also include the assessment of a person&apos;s health.
          </div>
        </div>
        {healthServices.map((service) => (
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
