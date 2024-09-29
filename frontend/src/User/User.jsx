import Button from "../Button/Button";
import GoalCard from "../GoalCard/GoalCard";
import profile from "../assets/money_1141783.png";
import "./User.css";

function User() {
  return (
    <>
      <section className="user-profile">
        <div className="hello-user">
          <img className="profile-pic" src={profile} alt="profile picture" />
          <h1>Hello Dania!</h1>
        </div>

        <div className="card-container">
          <GoalCard title="Budgeting" />
          <GoalCard title="Emergency Fund" />
          <GoalCard title="Retirement" />
        </div>
        <div className="match-section">
          <p>It&apos;s a little empty here... Find a finance buddy!</p>
          <Button text="Find a match" />
        </div>
      </section>
    </>
  );
}

export default User;
