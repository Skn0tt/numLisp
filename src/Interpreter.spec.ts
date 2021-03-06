import { interpret } from "./Interpreter"

describe("Interpreter", () => {
  test.each`
  given                                   | expected
  ${"(+ 1 2)"}                            | ${[3]}
  ${"(- 1 2)"}                            | ${[-1]}
  ${"(+ (+ 1 2) 3)"}                      | ${[6]}
  ${"(list 1 2 3)"}                       | ${[[1, 2, 3]]}
  ${"(cons 1 (list 2 3))"}                | ${[[1, 2, 3]]}
  ${"( + 10 ( car ( list 32 33 34 ) ) )"} | ${[42]}
  `("$interpret($given)=$expected", ({ given, expected }) => {
    expect(interpret(given)).toEqual(expected)
  })
})