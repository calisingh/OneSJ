import React from "react";

const EmergencyBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        top: "175px",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      <p
        style={{
          width: "75%",
          textAlign: "center",
          font: "1.5rem montserrat",
          minWidth: "500px",
        }}
      >
        <i>
          <b>
            If you are experiencing a crisis or have an emergency, please call
            911.
          </b>{" "}
          Many of the services listed on this website will not respond
          immediately. If you or a loved one are experiencing suicidal thoughts,
          please call the National Suicide Prevention Lifeline. The Lifeline
          provides 24/7, free and confidential support for people in distress.
        </i>
      </p>
      <a
        href="tel:18002738255"
        style={{
          border: "1px solid white",
          borderRadius: "5px",
          color: "white",
          padding: "5px 8px",
          font: "2rem montserrat",
          fontWeight: "bold",
        }}
      >
        Call: 1-800-273-8255
      </a>
    </div>
  );
};

export default EmergencyBanner;
