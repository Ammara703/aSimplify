import "../index.css";
export default function Services() {
  return (
    <div className="wrapper services-box">
      <h1 className="lg-heading">services & technologies</h1>
      <p className="services-para1">
        We specialize in delivering future-proof solutions tailored to your
        needs, with a broad range of services that drive innovation
      </p>
      <section className="services-card-row1">
        <section className="services-card">
          <img src="./services-images/cube.png" alt="cube-icon" />

          <h1 className="md-heading">Web Development</h1>
          <h4 className="services-sub-head">React, Angular, NodeJS</h4>
          <br />
          <p className="services-para2">
            Craft seamless, dynamic websites that captivate and convert
          </p>
        </section>
        <section className="services-card">
          <img src="./services-images/flask.png" alt="flask-icon" />
          <h1 className="md-heading">AI & Generative AI</h1>
          <h4 className="services-sub-head">Magento, Shopify</h4>
          <br />
          <p className="services-para2">
            Harness the power of artificial intelligence to automate processes
            and drive smarter decision-making
          </p>
        </section>
        <section className="services-card">
          <img src="./services-images/pound.png" alt="pound-icon" />
          <h1 className="md-heading">App Development</h1>
          <h4 className="services-sub-head">React Native, Flutter</h4>
          <br />
          <p className="services-para2">
            Craft seamless, dynamic websites that captivate and convert
          </p>
        </section>
        <section className="services-card">
          <img src="./services-images/puzzel.png" alt="puzzel-icon" />
          <h1 className="md-heading">Software Development</h1>
          <h4 className="services-sub-head">Electron.js</h4>
          <br />
          <p className="services-para2">
            Tailored software solutions to streamline your operations and meet
            unique business challenges
          </p>
        </section>
        <section className="services-card">
          <img src="./services-images/giftBox.png" alt="giftBox-icon" />
          <h1 className="md-heading">Interface Design</h1>
          <h4 className="services-sub-head">React, Angular, NodeJS</h4>
          <br />
          <p className="services-para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </section>
        <section className="services-card">
          <img src="./services-images/flag.png" alt="flag-icon" />
          <h1 className="md-heading">E-commerce</h1>
          <h4 className="services-sub-head">React, Angular, NodeJS</h4>
          <br />
          <p className="services-para2">
            Build scalable, high-performance online stores that grow with your
            business
          </p>
        </section>
      </section>
      <button className="nextPage-btn">
        <a href="">
          our services
          <img className="arrow-icon" src="./arrow.png" alt="" />
        </a>
      </button>
    </div>
  );
}
