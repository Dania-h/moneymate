import { Link } from "react-router-dom";
import Button from "../Button/Button";
import GoalCard from "../GoalCard/GoalCard";
import profile from "../assets/money_1141783.png";
import usflag from "../assets/emojione_flag-for-united-states.png"
import "./User.css";

function User() {
  return (
    <>
      <section className="user-profile">
        <div className="pic-name">
          <img className="profile-pic" src={profile} alt="profile picture" />
          <h1>Hello Dania!</h1>
          <img style={{ marginLeft: "1rem" }} src={usflag} />
          <p>EN</p>
        </div>

        <div className="card-container">
          <GoalCard title="Budgeting" />
          <GoalCard title="Emergency Fund" />
          <GoalCard title="Retirement" />
        </div>
        <div className="match-section">
          <p>It&apos;s a little empty here... Find a finance buddy!</p>
          <Link to="/find">
            <Button text="Find a match" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default User;
