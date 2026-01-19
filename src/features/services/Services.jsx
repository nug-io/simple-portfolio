import { services } from "./services.data";

export default function Services() {
  return (
    <section id="services">
      <div className="services main-container">
        <h3 className="pre-title">Services</h3>
        <h1 className="section-title services-title">Specialized In</h1>

        <div className="grid-3">
          {services.map((service) => (
            <div key={service.title} className="service">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
