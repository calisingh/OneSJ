import React from "react";
import Image from "react-bootstrap/Image";

const HelpBanner = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          padding: "1rem 3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "25%",
            color: "white",
            margin: "auto 1rem auto 0",
            textAlign: "center",
            font: "1.3rem montserrat",
            minWidth: "400px",
          }}
        >
          <h3 style={{ fontWeight: "900" }}>HELP IS OUT THERE!</h3>
          <hr
            style={{
              borderTop: "5px solid black",
              borderRadius: "20px",
              opacity: "0.5",
            }}
          />
          <p>
            OneSJ is a web app that points youth/young adults in San José to
            relevant mental health support options. On our web application, we
            provide information on mental and physical health resources in and
            around the Bay Area, which is updated every month. Eventually, we
            plan to expand with other categories of services, such as nutrition
            or financial support. Other categories are in-progress! We are
            working with our partners to bring together the best available and
            up-to-date information in an easy-to-use interface method.
          </p>
        </div>
        <div style={{ flex: "25%", marginLeft: "1rem" }}>
          <Image
            src="/logo.svg"
            alt=""
            style={{
              height: "100%",
              width: "100%",
              minWidth: "425px",
              minHeight: "350px",
              maxwidth: "500px",
              maxHeight: "425px",
              borderRadius: "50px",
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HelpBanner;
