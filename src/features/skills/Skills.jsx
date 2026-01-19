import SectionTitle from "../../shared/components/SectionTitle";
import { skills } from "./skills.data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills main-container">
        <SectionTitle
          preTitle="Learning Path"
          title="Skills & Experience"
        />

        <div className="skills-grid">
          <div className="skills-left">
            <div className="education">
              <div className="line">
                <div />
              </div>
              <div className="education-info">
                <h4>Self-learning Developer</h4>
                <p>Learning by building projects</p>
                <h4 className="education-years">2025 - 2026</h4>
              </div>
            </div>
          </div>

          <div className="skills-right">
            <p>{skills.description}</p>

            <div className="skills-list">
              <ul>
                {skills.stackLeft.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <ul>
                {skills.stackRight.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
