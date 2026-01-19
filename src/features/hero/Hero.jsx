import { heroData } from "./hero.data";
import heroImg from "../../assets/hero.svg";

export default function Hero() {
  return (
    <section id="hero" className="main-container">
      <div className="hero-left">
        <h3 className="pre-title">My name is</h3>
        <h1 className="hero-name">
          {heroData.firstName} <span>{heroData.lastName}</span>
        </h1>
        <p>{heroData.description}</p>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
}
