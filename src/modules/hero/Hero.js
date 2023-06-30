import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">
        Make progress every day and gradually shade into your best colors
      </h1>
      <span className="hero__sub-heading">gradate will help you:</span>
      <ul className="hero__list">
        <li>Establish the habits you've always dreamed of</li>
        <li>Set and achieve the daily goals you desire</li>
        <li>Maintain consistency and motivation</li>
        <li>Track your progress</li>
      </ul>
      <span className="hero__cta">
        Sign Up Now
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
    </div>
  );
};

export default Hero;
