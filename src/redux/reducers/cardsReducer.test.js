import cardsReducer from "./cardsReducer";
import actionTypes from "../actions/actionTypes";
import expect from "expect";
import { mockData, editedCard, savedCardsResult } from "./testMocks";

describe("cards reducer", () => {
  it("should return initial state", () => {
    const testAction = { type: "" };
    expect(cardsReducer({}, testAction)).toEqual({});
  });
  it("should return loading state", () => {
    const testAction = { type: actionTypes.LOADING_CARDS };
    expect(cardsReducer({}, testAction)).toEqual({
      loading: true
    });
  });

  it("should return getting success state", () => {
    const testAction = {
      type: actionTypes.SUCCESS_GETTING_CARDS,
      cards: mockData.cards
    };
    expect(cardsReducer({}, testAction)).toEqual({
      data: mockData.cards,
      loading: false
    });
  });

  it("should return getting failed state", () => {
    const testAction = {
      type: actionTypes.FAILED_GETTING_CARDS,
      error: "an error"
    };
    expect(cardsReducer({}, testAction)).toEqual({
      error: "an error",
      loading: false
    });
  });

  it("should return save card state", () => {
    const testAction = {
      type: actionTypes.SAVE_CARD,
      card: editedCard
    };
    expect(
      cardsReducer({ data: mockData.cards, loading: false }, testAction)
    ).toEqual({
      data: savedCardsResult.cards,
      loading: false
    });
  });
});
