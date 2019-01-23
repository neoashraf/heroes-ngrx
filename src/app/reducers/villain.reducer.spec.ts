import { reducer, initialState } from "./villain.reducer";

describe("Villain Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
