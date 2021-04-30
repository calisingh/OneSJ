import { Navbar } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import logo from "../../img/logo.png";
import "../../css/footer.css";

const Footer = () => {
  return (
    <Navbar className="footer center boxShadow">
      <div
        className="center"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        }}
      >
        <SocialButtons />
      </div>
      <div
        className="center"
        style={{
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <img
          className="boxShadow"
          src={logo}
          alt=""
          style={{
            maxWidth: "75px",
            borderRadius: "15px",
          }}
        />
        <h3>OneSJ</h3>
      </div>
      <hr
        style={{
          borderTop: "5px solid rgba(255, 236, 69, 0.7)",
          width: "50%",
        }}
      />
      <div
        className="center"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        <a href="/privacy-statement">Privacy Policy</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/contactus">Contact Us</a>
      </div>
      <span
        style={{
          color: "white",
          font: ".75rem montserrat",
          textAlign: "center",
        }}
      >
        Copyright © 2021 OneSJ, LLC All Rights Reserved.
      </span>
    </Navbar>
  );
};

const SocialButtons = () => {
  return (
    <>
      <IconButton
        className="twitter-share-button socialButton"
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=Hey,%20check%20out%20this%20new%20Mental%20Health%20Resource%20Provider%20onesj.org!"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        className="socialButton"
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/CityofSanJose"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        className="socialButton"
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/cityofsanjose/"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        className="socialButton"
        rel="noreferrer"
        target="_blank"
        href="https://www.youtube.com/c/CityOfSanJoseCalifornia/featured"
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        className="socialButton"
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/company/cityofsanjose/"
      >
        <LinkedInIcon />
      </IconButton>
    </>
  );
};

export default Footer;
