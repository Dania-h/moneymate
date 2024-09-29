import Button from "../Button/Button";
import GoalCard from "../GoalCard/GoalCard";
import profile from "../assets/money_1141783.png";
import logo from "../assets/mm_logo.png";
import "./User.css";

function User() {
  return (
    <>
      <header>
        <img src={logo} alt="moneymate logo" />
      </header>
      <section className="user-profile">
        <div className="hello-user">
          <img className="profile-pic" src={profile} alt="profile picture" />
          <h1>Hello Dania!</h1>
        </div>

        <div className="card-container">
          <GoalCard title="Budgeting"/>
          <GoalCard title="Emergency Fund"/>
          <GoalCard title="Retirement"/>
        </div>
        <Button text="Find a match" />
      </section>
    </>
  );
}

export default User;
