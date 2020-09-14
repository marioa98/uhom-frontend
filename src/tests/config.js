import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

export default configure({adapter: new Adapter()});