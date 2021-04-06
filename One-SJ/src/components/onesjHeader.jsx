import React from "react";

const OneSJHeader = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "10%",
          font: "1rem montserrat",
        }}
      >
        <h1
          style={{
            flex: "100%",
            textAlign: "center",
            fontWeight: "900",
            color: "white",
          }}
        >
          ONESJ
        </h1>
        <span
          style={{
            flex: "100%",
            textAlign: "center",
            fontWeight: "300",
            color: "#ffbb05",
          }}
        >
          FOR THE YOUTH, BY THE YOUTH.
        </span>
      </div>
    </React.Fragment>
  );
};

export default OneSJHeader;
