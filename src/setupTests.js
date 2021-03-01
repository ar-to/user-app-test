// @see https://stackoverflow.com/a/66012504/9270352
import "@testing-library/jest-dom/extend-expect";
// enzyme
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });