import PropTypes from "prop-types";
import "../index.css";
export default function Team(props) {
  return (
    <div className="team-card">
      <img src={props.img} alt="" />
      <h1 className="team-head">
        {props.h1}
        <span className="team-span">{props.position}</span>
      </h1>
      <p>{props.p}</p>
      <section className="team-media">
        <a href={props.twitter}>
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href={props.linkedin}>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href={props.facebook}>
          <i className="fa-brands fa-facebook"></i>
        </a>
      </section>
    </div>
  );
}
Team.propTypes = {
  img: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};
