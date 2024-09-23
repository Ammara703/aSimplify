import "../index.css";
export default function Footer() {
  return (
    <footer className="wrapper">
      <div className="footer-up">
        <h1>
          <a href="">aSimplify</a>
        </h1>
        <div className="f-para">
          <p>contact</p>
          <p>product</p>
          <p>support</p>
          <p>office</p>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-media">
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <p>copyright@2024 aSimplify.co</p>
      </div>
    </footer>
  );
}
