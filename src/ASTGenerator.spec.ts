import { generateAST } from "./ASTGenerator"

describe("ASTGenerator", () => {
  test.each`
    given | expected
    ${["(", "list", "a", "b", "c", ")"]} | ${[["list", "a", "b", "c"]]}
    ${["(", "cons", "a", "(", "cons", "b", "c", ")", ")"]} | ${[["cons", "a", ["cons", "b", "c"]]]}
  `("generateAST($given) ~= $expected", ({ given, expected }) => {
    expect(generateAST(given)).toEqual(expected);
  })
})