import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const BioCard = ({ headshot, name, title }) => {
  return (
    <Card className="bioCard center boxShadow">
      <CardHeader
        avatar={<Avatar className="bioCard boxShadow" src={headshot} />}
      />
      <h4>{name}</h4>
      <hr />
      <h5 className="bioCard">{title}</h5>
    </Card>
  );
};

export default BioCard;
