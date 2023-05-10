//Handles JSX for Footer

import { Segment } from "semantic-ui-react";
import "./Footer.css";

export const Footer = () => {
  return (
    <Segment id="footer" className="footerSegments">
      <div id="trademarkText" className="footerSegment">
        Copyright © 2023 CharacterHub™
      </div>
      <div id="socials" className="footerSegment">
        <a href="https://www.facebook.com" target="_blank">
          <img
            className="socialLogo"
            src="https://i.imgur.com/4hR3mf2.png"
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img
            className="socialLogo"
            src="https://i.imgur.com/amjYO7Q.png"
            alt="Twitter Logo"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img
            className="socialLogo"
            src="https://i.imgur.com/pKG5aXo.png"
            alt="Instagram Logo"
          />
        </a>
        <a href="https://www.pinterest.com" target="_blank">
          <img
            className="socialLogo"
            src="https://i.imgur.com/wteUMPd.png"
            alt="Pinterest Logo"
          />
        </a>
      </div>
      <div id="footerPolicies" className="footerSegment">
        Privacy Policy | Terms and Conditions | Disclaimer
      </div>
    </Segment>
  );
};
