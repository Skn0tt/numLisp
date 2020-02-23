import { tokenize, splitMultiple } from "./Tokenizer"

describe("tokenize", () => {

  test.each`
    given   | expected
    ${""}   | ${[]}
    ${"()"} | ${["(", ")"]}
    ${"(list a b c)"} | ${["(", "list", "a", "b", "c", ")"]}
    ${"(define (reduce a b) (+ a b))"} | ${["(", "define", "(", "reduce", "a", "b", ")", "(", "+", "a", "b", ")", ")"]}
  `('tokenize($given) ~= $expected', ({ given, expected }) => {
    expect(tokenize(given)).toEqual(expected);
  });

})

describe("splitMultiple", () => {

  describe("when given only '(' to split", () => {
    it("acts normally", () => {
      expect(splitMultiple("(")("( ab ce ) ( dasde")).toEqual(["(", " ab ce ) ", "(", " dasde"]);
    })
  })
})