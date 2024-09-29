import PropTypes from "prop-types";
import { useState } from "react";
import plus from "../assets/ic_round-plus.svg";
import "./GoalCard.css";
import MilestoneInput from "../MilestoneInput/MilestoneInput";

function GoalCard({ title }) {
  const [inputItems, setInputItems] = useState([]);

  const handleClick = () => {
    setInputItems([...inputItems, <MilestoneInput key={inputItems.length} />])
  }

  return (
    <section className="goal-card">
      <h2>{title}</h2>
      <div className="milestones">
        {inputItems}
        <button className="add" onClick={handleClick}>
          <img src={plus} alt="plus"/>
          Add milestone
        </button>
      </div>
    </section>
  );
}

GoalCard.propTypes = {
  title: PropTypes.string.isRequired
}

export default GoalCard;
