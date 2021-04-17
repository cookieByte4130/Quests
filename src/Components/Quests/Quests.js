import React from "react";
import classes from "./Quests.module.css";
import Quest from "./Quest/Quest";

const Quests = (props) => {
  return (
    <ul className={classes.Quests}>
      {props.quests.length > 0 ? (
        props.quests.map((q, i) => {
          return (
            <Quest
              key={i}
              id={i}
              quest={q}
              completeQuest={props.completeQuest}
            />
          );
        })
      ) : (
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8Is2nInQzWgzrvE_M4_sJDa5eAaXE6y7kQ&usqp=CAU"
          }
          alt="We demand a shrubbery!"
        />
      )}
    </ul>
  );
};

export default Quests;
