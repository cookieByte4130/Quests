import { render, screen } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });
test("renders learn react link", () => {
  // const wrapper = shallow(<App />);
  // expect(wrapper).toContain("learn react");
});
