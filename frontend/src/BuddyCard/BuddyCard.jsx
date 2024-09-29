import PropTypes from "prop-types";
import Button from "../Button/Button";
import usflag from "../assets/emojione_flag-for-united-states.png";
import spflag from "../assets/emojione_flag-for-spain.png";

function BuddyCard({ username, picture, language, bio, financialGoals }) {
  return (
    <div
      className="card"
      style={{
        minHeight: "26em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
      }}
    >
      <div className="pic-name">
        <img className="profile-pic" src={picture} />
        <h2>{username}</h2>
        <img src={(language == "EN") ? usflag : spflag} style={{ marginLeft: "1rem" }} />
        <p>{language}</p>
      </div>
      <div>
        <h3>Bio</h3>
        <p>{bio}</p>
        <h3>Financial Goals</h3>
        <ul>
          {financialGoals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Button text="Request a match" />
      </div>
    </div>
  );
}

BuddyCard.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
  bio: PropTypes.string,
  financialGoals: PropTypes.array,
};

export default BuddyCard;
