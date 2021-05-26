import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const BioCard = ({ headshot, name, title }) => {
  return (
    <Card
      className="center boxShadow"
      style={{
        height: "25rem",
        width: "20rem",
        backgroundColor: "rgba(250, 250, 210, 0.9)",
        borderRadius: "1rem",
        gap: "0",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            className="boxShadow"
            src={headshot}
            style={{ width: "10rem", height: "10rem" }}
          />
        }
      />
      <h4>{name}</h4>
      <hr />
      <h5 style={{ color: "rgb(0, 127, 127)" }}>{title}</h5>
    </Card>
  );
};

export default BioCard;
