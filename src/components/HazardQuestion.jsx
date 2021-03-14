import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const HazardQuestion = ({ quiz, question, what, _id, dispatch, action }) => {
  console.log(what);

  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState("");

  return (
    <div className="item_container">
      <div className="q_container">
        <div className="q_num">{quiz}</div>
        <div className="q_text">
          {question} <span>?</span>
        </div>
        <div className="q_buttons">
          <Button
            className="q_button"
            disabled={what === undefined ? false : what ? true : false}
            style={{
              backgroundColor:
                what === undefined ? false : what ? "#007bff" : "#fff",
              color: what === undefined ? false : what ? "#fff" : "#007bff",
            }}
            onClick={() => dispatch(action({ id: _id, state: true }))}
          >
            YES
          </Button>
          <Button
            disabled={what === undefined ? false : !what ? true : false}
            style={{
              backgroundColor:
                what === undefined ? false : !what ? "#007bff" : "#fff",
              color: what === undefined ? false : what ? "#007bff" : "#fff",
            }}
            className="q_button"
            onClick={() => dispatch(action({ id: _id, state: false }))}
          >
            NO
          </Button>
        </div>
      </div>
      <p
        onClick={() => setNoteOpen(true)}
        style={{ display: what === undefined? "none" : noteOpen ? "none" : "block"}}
        className="q_add_note text-primary"
      >
        <span>+</span> Add Note
      </p>
      <div
        style={{ padding: "20px 30px", display: noteOpen ? "block" : "none" }}
      >
        <InputGroup className="mb-2">
          <Form.Control
            size="sm"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter note"
          />
          <InputGroup.Prepend
            style={{ cursor: "pointer" }}
            onClick={() => {
              setNote("");
              setNoteOpen(false);
            }}
          >
            <InputGroup.Text>X</InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    </div>
  );
};

export default HazardQuestion;
