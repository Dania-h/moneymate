import plus from "../assets/ic_round-plus.svg";
import "./GoalCard.css";

function GoalCard() {
  return (
    <section className="goal-card">
      <h2>Budgeting</h2>
      <div className="goal">
        <button>
          <img src={plus} />
          Add personal milestone
        </button>
      </div>
    </section>
  );
}

export default GoalCard;
