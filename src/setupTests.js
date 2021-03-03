// @see https://stackoverflow.com/a/66012504/9270352
import "@testing-library/jest-dom/extend-expect";
// enzyme
import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
/**
 * Experimental due to delay in enzyme support for react 17 at the time of building this application
 * @see https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17
 * @see https://github.com/enzymejs/enzyme/issues/2429#issuecomment-679265564
 */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });