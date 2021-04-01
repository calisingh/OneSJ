import React from "react";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

const GetStartedButton = ({ history }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          flex: "100%",
          textAlign: "center",
          fontWeight: "900",
          color: "white",
        }}
      >
        <Fab
          size="large"
          variant="extended"
          color="secondary"
          style={{
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "900",
          }}
          onClick={() => history.push("/services")}
        >
          <FavoriteIcon style={{ marginRight: ".5rem", fontSize: "2rem" }} />
          Get Started
        </Fab>
      </div>
    </div>
  );
};

export default GetStartedButton;
