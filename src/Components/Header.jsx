import "../index.css";
export default function Header() {
  return (
    <header id="home">
      <p className="light-purple head-p1">The future belongs to you</p>
      <h1 className="head-title">
        Technology belongs to <span className="purple-gradient">everyone</span>
      </h1>
      <p className="head-p2">
        We&apos;re here to bring your vision to life with complete production
        visibility
      </p>
      <div className="head-btn">
        <button className="btn primary-btn">
          <a href="#contact">Book a call</a>
        </button>
        <button className="btn secondary-btn play-btn">
          how it works
          <img className="play-icon" src="./play-icon.png" alt="play-icon" />
        </button>
      </div>
    </header>
  );
}
