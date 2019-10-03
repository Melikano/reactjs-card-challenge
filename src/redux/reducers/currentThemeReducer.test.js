import currentThemeReducer from "./currentThemeReducer";
import actionTypes from "../actions/actionTypes";
import expect from "expect";

describe("cards reducer", () => {
  it("should return initial state", () => {
    const testAction = { type: "" };
    expect(currentThemeReducer("", testAction)).toEqual("");
  });

  it("should return currrent theme set state", () => {
    const testAction = { type: actionTypes.SET_CURRENT_THEME, theme: "sport" };
    expect(currentThemeReducer({}, testAction)).toEqual("sport");
  });
});
