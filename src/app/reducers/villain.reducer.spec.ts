import { initialState, villainReducer } from "./villain.reducer";

describe("Villain Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = villainReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
