import PropTypes from "prop-types";
import Button from "../Button/Button";

function BuddyCard({ username, picture, language, bio, financialGoals }) {
  return (
    <div className="card">
      <div className="pic-name">
        <img className="profile-pic" src={picture} />
        <h2>{username}</h2>
        <p style={{ marginLeft: "1rem" }}>{language}</p>
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
