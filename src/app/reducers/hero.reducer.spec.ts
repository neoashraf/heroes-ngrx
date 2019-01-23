import { heroReducer, initialState } from "./hero.reducer";

describe("Heroes Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = heroReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
