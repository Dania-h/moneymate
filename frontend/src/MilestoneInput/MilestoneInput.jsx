import { useRef, useState } from "react";
import check from "../assets/quill_checkmark.svg";
import "./MilestoneInput.css";

function MilestoneInput() {
  const inputRef = useRef();
  const [radioType, setRadioType] = useState(false);

  const handleClick = () => {
    setRadioType(true);
  };

  return (
    <div className="input-div">
      {radioType ? (
        <>
          <input
            type="checkbox"
            id="checkMilestone"
            className="check-box"
            value={inputRef}
          />
          <label htmlFor="checkMilestone">{inputRef.current.value}</label>
        </>
      ) : (
        <>
          <input
            type="text"
            id="milestone"
            className="text-box"
            ref={inputRef}
            placeholder="Get started..."
          />
          <button type="submit" onClick={handleClick}>
            <img src={check} aria-label="submit" />
          </button>
        </>
      )}
    </div>
  );
}

export default MilestoneInput;
