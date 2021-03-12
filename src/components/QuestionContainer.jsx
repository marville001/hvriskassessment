import React, { useState } from "react";
import { Button } from "react-bootstrap";

const QuestionContainer = ({ num, question, actionYes
 }) => {
  const [anyNote, setHaveNote] = useState(false);
  const [note, setNote] = useState("");
  const [choice, setChoice] = useState(false);

  return (
    <div className="item_container">
      <div className="q_container">
        <div className="q_num">{num}</div>
        <div className="q_text">
          {question} <span>?</span>
        </div>
        <div className="q_buttons">
          <Button
            disabled={choice === "yes" ? true : false}
            style={{
              backgroundColor: choice === "yes" ? "#007bff" : "#fff",
              color: choice !== "yes" ? "#007bff" : "#fff",
            }}
            className="q_button"
            onClick={() => setChoice("yes")}
          >
            YES
          </Button>
          <Button
            disabled={choice === "no" ? true : false}
            style={{
              backgroundColor: choice === "no" ? "#007bff" : "#fff",
              color: choice !== "no" ? "#007bff" : "#fff",
            }}
            className="q_button"
            onClick={() => setChoice("no")}
          >
            NO
          </Button>
        </div>
      </div>
      {choice === "yes" && (
        <p>Call 911 and isolate yourself from the vehicle a minimum of 75’</p>
      )}
      <p className="q_add_note text-primary">
        <span>+</span> Add Note
      </p>
    </div>
  );
};

export default QuestionContainer;
