import SectionTitle from "../../shared/components/SectionTitle";
import { portfolios } from "./portfolio.data";

export default function Portfolio() {
  return (
    <section id="portfolios">
      <div className="portfolios main-container">
        <SectionTitle preTitle="My Works" title="Featured Portfolios" />

        <div className="grid-3">
          {portfolios.map((item) => (
            <div key={item.id} className="portfolio">
              <div className="portfolio-cover">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="portfolio-info">
                <div className="portfolio-title">
                  <h4>{item.title}</h4>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>

                <div className="portfolio-tags">
                  {item.tags.map((tag) => (
                    <div key={tag}>{tag}</div>
                  ))}
                </div>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
