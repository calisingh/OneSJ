import BioCard from "./bioCard";
import angela from "../../../img/angela_headshot.png";
import flor from "../../../img/flor_headshot.jpeg";
import justin from "../../../img/justin_headshot.png";
import kun from "../../../img/kun_headshot.jpg";

const MeetTheTeam = () => {
  return (
    <>
      <div className="meetTheTeamContainer center">
        <h3>Meet the Team Behind OneSJ!</h3>
        <hr />
      </div>
      <div className="bioCardsContainer center">
        <BioCard
          headshot={justin}
          name="Justin Mata"
          title="Lead Software Developer"
        />
        <BioCard
          headshot={kun}
          name="Kunwarpreet Singh Behar"
          title="Software Developer"
        />
        <BioCard headshot={flor} name="Flor Sario" title="Data and Marketing" />
        <BioCard
          headshot={angela}
          name="Angela Pham"
          title="Software Developer"
        />
      </div>
    </>
  );
};

export default MeetTheTeam;
