import React from "react";
import classes from "./QuestInput.module.css";

const QuestInput = (props) => {
  return (
    <div className={classes.QuestInput}>
      <input
        value={props.questInput}
        onChange={(e) => {
          return props.updateInputQuest(e.target.value);
        }}
        type="text"
        placeholder="Scribe thine awesome quest here..."
      />
      <button onClick={props.addQuest}>➕</button>
    </div>
  );
};

export default QuestInput;
