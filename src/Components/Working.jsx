import "../index.css";
export default function Working() {
  return (
    <div className="working-section wrapper">
      <img
        className="upper-arrow"
        src="./working-images/upper-arrow.png"
        alt="upper arrow icon"
      />
      <img
        className="lower-arrow"
        src="./working-images/lower-arrow.png"
        alt="lower arrow icon"
      />
      <h1 className="lg-heading">how it works</h1>
      <section className="working-card-row1">
        <section className="working-card">
          <div className="icon-container">
            <img src="./working-images/search-icon.png" alt="search-icon" />
          </div>

          <h1 className="md-heading">Define the problem</h1>

          <br />
          <p className="services-para2">
            We begin by deeply understanding your challenges, goals, and needs
          </p>
        </section>
        <section className="working-card">
          <div className="icon-container">
            <img src="./working-images/engine-icon.png" alt="engine-icon" />
          </div>

          <h1 className="md-heading">Develop a Solution</h1>

          <br />
          <p className="services-para2">
            Our expert team crafts a tailored solution that aligns with your
            business objectives
          </p>
        </section>
        <section className="working-card">
          <div className="icon-container">
            <img src="./working-images/pen-icon.png" alt="pen-icon" />
          </div>

          <h1 className="md-heading">Refine</h1>
          <br />
          <p className="services-para2">
            Once the solution is live, we continuously improve and optimize to
            ensure maximum impact and performance.
          </p>
        </section>
      </section>
      <button className="nextPage-btn">
        <a href="">
          learn more
          <img className="arrow-icon" src="./arrow.png" alt="" />
        </a>
      </button>
    </div>
  );
}
