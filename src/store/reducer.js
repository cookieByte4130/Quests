const initialState = {
  questInput: "",
  quests: ["Find Holy Grail", "Answer 3 questions", "Track swallow"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT_QUEST":
      return {
        ...state,
        questInput: action.inputQuestValue,
      };
    case "ADD_QUEST":
      return {
        ...state,
        quests: state.quests.concat(state.questInput),
        questInput: "",
      };
    case "COMPLETE_QUEST":
      const updatedArray = state.quests.filter(
        (task, i) => i !== action.completedQuestId
      );
      //add coconut/huzzah sound effect?
      return {
        ...state,
        quests: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
