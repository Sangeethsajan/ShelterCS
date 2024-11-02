export default function Services() {
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
      <div className="row justify-content-center mt-3">
        <div className="text-center display-4 font shelterBlue">
          Other Services
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 fs-4 fst-italic text-center font lead">
            We have other plenty of serives available such as services that
            offer offers daytime activities. Assists you in keeping your job and
            minor Home Modifications.
          </div>
        </div>
        {otherServices.map((service) => (
          <div className="col-10 m-3">
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
