import { render, screen } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import QuestInput from "./QuestInput";

configure({ adapter: new Adapter() });

test("QuestInput button", () => {
  const wrapper = shallow(<QuestInput />);
  const addQuestButton = wrapper.find("button");
  expect(addQuestButton.length).toEqual(1);
});

test("QuestInput button click", () => {
  const addQuestMock = jest.fn();
  const wrapper = shallow(<QuestInput addQuest={addQuestMock} />);
  const addQuestButton = wrapper.find("button");
  addQuestButton.simulate("click");
  expect(addQuestMock.mock.calls.length).toEqual(1);
});

test("QuestInput input", () => {
  const wrapper = shallow(<QuestInput />);
  const addQuestInput = wrapper.find("input");
  expect(addQuestInput.length).toEqual(1);
});

//expect.toHaveBeenCalled with mocks args
//Every important elem and data
//Every prop of components
