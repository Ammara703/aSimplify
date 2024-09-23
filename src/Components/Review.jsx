import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
export default function Header() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="review-section wrapper">
      <h1 className="review-head">What they say about us</h1>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <section className="review-container review1">
          <div className="review-img">
            <img src="./review-images/cibler-img.png" alt="" />
          </div>
          <div className="review-data">
            <p className="review-para">
              “I have been working with aSimplify for almost 2 years now and
              will certainly continue for the coming years. They successfully
              helped build and grow our platform on features and scalability.
              Good communication, fluent English, strong technical skills,
              aSimplify is a company you can rely on pleasant and easy to work
              with.”
            </p>
            <p className="review-person">
              Fabien Grosyeux
              <span className="review-position">
                Co-founder & CTO at CibleR
              </span>
            </p>
            <section className="review-media">
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </section>
          </div>
        </section>
        <section className="review-container review2">
          <div className="review-img">
            <img src="./review-images/boxlife-img.png" alt="" />
          </div>
          <div className="review-data">
            <p className="review-para">
              “As always, did a phenomenal job. I&apos;ve used them for a few
              jobs now and they always worked quickly, had an open line of
              communication, and are extremely knowledgeable – I&apos;ve worked
              on the Shopify platform, WordPress, and other custom applications
              with them.”
            </p>
            <p className="review-person">
              Damect Dominguez
              <span className="review-position">CEO at BoxLife</span>
            </p>
            <section className="review-media">
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </section>
          </div>
        </section>
      </Slider>
      <div className="carousel-btn">
        <button className="button prev-btn" onClick={previous}>
          <i className="fa-regular fa-circle-left"></i>
        </button>
        <button className="button next-btn" onClick={next}>
          <i className="fa-regular fa-circle-right"></i>
        </button>
      </div>
    </div>
  );
}
