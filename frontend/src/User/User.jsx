import { Link } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import Button from "../Button/Button";
import GoalCard from "../GoalCard/GoalCard";
import profile from "../assets/money_1141783.png";
import usflag from "../assets/emojione_flag-for-united-states.png";
import "./User.css";

function User() {
  const data = [
    {
      subject: "Spending",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "Investing",
      A: 50,
      fullMark: 100,
    },
    {
      subject: "Savings",
      A: 86,
      fullMark: 100,
    },
    {
      subject: "Retirement",
      A: 99,
      fullMark: 100,
    },
    {
      subject: "Property",
      A: 10,
      fullMark: 100,
    },
  ];

  return (
    <>
      <section className="user-profile">
        <div className="top-container">
          <div className="pic-name">
            <img className="profile-pic" src={profile} alt="profile picture" />
            <h1>Hello Dania!</h1>
            <img style={{ marginLeft: "1rem" }} src={usflag} />
            <p>EN</p>
          </div>
          <ResponsiveContainer width="35%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                dataKey="A"
                stroke="#006d77"
                fill="#0c8c90"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
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
