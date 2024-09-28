import Button from "../Button/Button"
import GoalCard from "../GoalCard/GoalCard"
import profile from "../assets/money_1141783.png"
import "./User.css"

function User() {
  return (
    <section>
      <div className="hello-user">
        <img className="profile-pic" src={profile} alt="profile picture" />
        <h1>Hello Dania!</h1>
      </div>

      <GoalCard />
      <Button text="Find a match" />
    </section>
  );
}

export default User;