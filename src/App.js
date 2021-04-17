import React, { Component } from "react";
import classes from "./App.module.css";

import { connect } from "react-redux";

import QuestInput from "./Components/QuestInput/QuestInput";
import Quests from "./Components/Quests/Quests";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>Quests for Today</h1>
        <div className={classes.QuestsDisplay}>
          <QuestInput
            addQuest={this.props.onAddQuest}
            updateInputQuest={this.props.onUpdateInputQuest}
            questInput={this.props.questInput}
          />
          <Quests
            quests={this.props.quests}
            completeQuest={this.props.onCompleteQuest}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questInput: state.questInput,
    quests: state.quests,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateInputQuest: (inputQuestValue) =>
      dispatch({
        type: "UPDATE_INPUT_QUEST",
        inputQuestValue: inputQuestValue,
      }),
    onAddQuest: () => dispatch({ type: "ADD_QUEST" }),
    onCompleteQuest: (id) =>
      dispatch({ type: "COMPLETE_QUEST", completedQuestId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
