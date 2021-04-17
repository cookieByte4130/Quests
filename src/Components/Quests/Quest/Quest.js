import React from "react";
import classes from "./Quest.module.css";

const Quest = (props) => {
  return (
    <li key={props.id} className={classes.Quest}>
      <button onClick={() => props.completeQuest(props.id)}>🥥</button>
      {props.quest}
    </li>
  );
};

export default Quest;
