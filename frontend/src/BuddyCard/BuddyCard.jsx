import otherprofile from "../assets/profile1.png";
import Button from "../Button/Button";

function BuddyCard() {
  return (
    <div className="card">
      <div className="pic-name">
        <img className="profile-pic" src={otherprofile} />
        <h2>JaneyJane</h2>
      </div>
      <div>
        <h3>Bio</h3>
        <p>Hi everyone! I need some help staying on track to save up money for a home.</p>
        <h3>Financial Goals</h3>
        <p>Home Buying</p>
        <Button text="Request a match" />
      </div>
    </div>
  );
}

export default BuddyCard;
