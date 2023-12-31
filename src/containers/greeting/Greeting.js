import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingPerson from "../../assets/lottie/landingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { FcDownRight } from 'react-icons/fc';
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <h2 className={isDark ? "dark-mode additional-line" : "additional-line"}>
              And I am:
              </h2>
              

            <ul className={isDark ? "dark-mode greeting-text-ul" : "greeting-text-ul"}>
              <li>
                <FcDownRight className="icon" /> A Graduate Student at Carnegie Mellon University.
              </li>
              <li>
                <FcDownRight className="icon" /> A Former Senior Software Engineer at Nference.
              </li>
              <li>
                <FcDownRight className="icon" /> A Former Software Engineer at GE Power.
              </li>

              <li>
                <FcDownRight className="icon" /> On the lookout for SDE jobs for summer '24.
              </li>
            </ul>

              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {(
              <img
                alt="portrait"
                src={require("../../assets/images/saurav_portrait.png")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
