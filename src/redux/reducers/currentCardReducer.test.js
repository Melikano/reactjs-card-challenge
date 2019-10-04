import currentCardReducer from "./currentCardReducer";
import actionTypes from "../actions/actionTypes";
import expect from "expect";
import {
  mockData,
  editedTitleCard,
  editedDescriptionCard
} from "../../mocks/testMocks";

describe("current card reducer", () => {
  it("should return initial state", () => {
    const testAction = { type: "" };
    expect(currentCardReducer({}, testAction)).toEqual({});
  });
  it("should return current card state", () => {
    const testAction = {
      type: actionTypes.SET_CURRENT_CARD,
      card: mockData.cards[1]
    };
    expect(currentCardReducer({}, testAction)).toEqual(mockData.cards[1]);
  });

  it("should return current card with edited title state", () => {
    const testAction = {
      type: actionTypes.EDIT_TITLE,
      newTitle: "edited title"
    };
    expect(currentCardReducer(mockData.cards[1], testAction)).toEqual(
      editedTitleCard
    );
  });

  it("should return current card with edited description state", () => {
    const testAction = {
      type: actionTypes.EDIT_DESCRIPTION,
      newDescription: "edited description"
    };
    expect(currentCardReducer(mockData.cards[1], testAction)).toEqual(
      editedDescriptionCard
    );
  });
});
