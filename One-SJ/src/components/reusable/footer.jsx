import { Navbar } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from "@material-ui/icons/Reddit";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import logo from "../../img/logo.png";
import "../../css/footer.css";

const Footer = () => {
  return (
    <Navbar
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        placeItems: "center",
        width: "100%",
        borderRadius: "1px",
        backgroundColor: "rgba(0, 127, 127, 0.95)",
        height: "50vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          placeItems: "center",
          gap: "1rem",
        }}
      >
        <SocialButtons />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
          gap: "1rem",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            maxWidth: "75px",
            borderRadius: "15px",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        />
        <h3
          style={{
            fontWeight: "900",
            color: "white",
            textShadow: "5px 5px 0px rgba(0,0,0,0.2)",
            cursor: "default",
          }}
        >
          OneSJ
        </h3>
      </div>
      <hr
        style={{
          borderTop: "5px solid rgb(254, 215, 1)",
          borderRadius: "20px",
          opacity: "0.7",
          width: "50%",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          placeItems: "center",
          gap: "2rem",
        }}
      >
        <a href="/privacy-statement">Privacy Policy</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/contactus">Contact Us</a>
      </div>
      <p style={{ color: "white" }}>
        Copyright © 2021 OneSJ, LLC All Rights Reserved.
      </p>
    </Navbar>
  );
};

const SocialButtons = () => {
  return (
    <>
      <IconButton
        className="twitter-share-button"
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=Hey,%20check%20out%20this%20new%20Mental%20Health%20Resource%20Provider%20onesj.org!"
      >
        <TwitterIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/CityofSanJose"
      >
        <FacebookIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/cityofsanjose/"
      >
        <InstagramIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        rel="noreferrer"
        target="_blank"
        href="https://www.youtube.com/c/CityOfSanJoseCalifornia/featured"
      >
        <YouTubeIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        rel="noreferrer"
        target="_blank"
        href="https://www.reddit.com/r/SanJose/"
      >
        <RedditIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/company/cityofsanjose/"
      >
        <LinkedInIcon style={{ fontSize: "2rem" }} />
      </IconButton>
    </>
  );
};

export default Footer;
