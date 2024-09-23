import "../index.css";
export default function Header() {
  return (
    <div>
      <img src="./ellipse-bg.png" alt="" className="ellipse" />
      <div className="about-section">
        <p className="about-para">
          At aSimplify, we empower founders of all sizes to harness cutting-edge
          technology, driving innovation and future-proofing their businesses.
          Let&apos;s embrace the future together.
        </p>
        <button className="btn primary-btn">
          <a href="#contact">let&apos;s connect</a>
        </button>
      </div>
    </div>
  );
}
