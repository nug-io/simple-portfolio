import { useToggle } from "../shared/hooks/useToggle";

export default function Header() {
  const { open, toggle } = useToggle();

  return (
    <header>
      <div className="main-container nav">
        <div className="logo" />

        <nav className={open ? "nav-active" : ""}>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolios">Portfolio</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank">
                <button className="btn">Resume</button>
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`burger ${open ? "toggle-burger" : ""}`}
          onClick={toggle}
        >
          <div className="line-1" />
          <div className="line-2" />
          <div className="line-3" />
        </div>
      </div>
    </header>
  );
}
