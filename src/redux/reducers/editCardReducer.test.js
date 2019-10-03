import editCardReducer from "./editCardReducer";
import actionTypes from "../actions/actionTypes";
import expect from "expect";

describe("cards reducer", () => {
  it("should return initial state", () => {
    const testAction = { type: "" };
    expect(editCardReducer(false, testAction)).toEqual(false);
  });

  it("should return editing started state", () => {
    const testAction = { type: actionTypes.START_EDIT };
    expect(editCardReducer({}, testAction)).toEqual(true);
  });

  it("should return editing finished state", () => {
    const testAction = { type: actionTypes.STOP_EDIT };
    expect(editCardReducer({}, testAction)).toEqual(false);
  });
});
