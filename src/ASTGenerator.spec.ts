import { generateAST, untilClosingBracket, withoutEnclosingBrackets } from "./ASTGenerator"

describe("ASTGenerator", () => {

  test.each`
    given                                | expected
    ${["(", "list", "a", "b", "c", ")"]} | ${["(", "list", "a", "b", "c", ")"]}
    ${["(", "cons", "b", "c", ")", ")"]} | ${["(", "cons", "b", "c", ")"]}
  `("untilClosingBracket($given) ~= $expected", ({ given, expected }) => {
    expect(untilClosingBracket(given)).toEqual(expected);
  })

  describe("withoutEnclosingBrackets", () => {
    describe("when giving enclosing brackets", () => {
      it("return the inner part", () => {
        expect(
          withoutEnclosingBrackets(["(", "a", ")"])
        ).toEqual(["a"]);
      })
    })

    describe("when starting with smth else", () => {
      it("doesnt do anything", () => {
        expect(
          withoutEnclosingBrackets(["b", "a", ")"])
        ).toEqual(["b", "a", ")"]);
      });
    })

    describe("when ending with smth else", () => {
      it("doesnt do anything", () => {
        expect(
          withoutEnclosingBrackets(["(", "a", "c"])
        ).toEqual(["(", "a", "c"]);
      })
    })
  })

  test.each`
    given                                                  | expected
    ${["(", "list", "a", "b", "c", ")"]}                   | ${[["list", "a", "b", "c"]]}
    ${["(", "cons", "a", "(", "cons", "b", "c", ")", ")"]} | ${[["cons", "a", ["cons", "b", "c"]]]}
    ${["(", "cons", "a", "b", ")", "(", "cons", "a", "b", ")"]} | ${[["cons", "a", "b"], ["cons", "a", "b"]]}
  `("generateAST($given) ~= $expected", ({ given, expected }) => {
    expect(generateAST(given)).toEqual(expected);
  })
})