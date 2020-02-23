import { tokenize } from "./Parser"

describe("tokenize", () => {
  describe("when given empty string", () => {
    it("returns empty list of tokens", () => {
      expect(tokenize("")).toEqual([]);
    })
  })
})