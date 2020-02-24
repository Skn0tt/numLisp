import { execute } from "./Runtime";

describe("Runtime", () => {

  describe("execute", () => {
    describe("when given (f 1 2)", () => {
      it("returns f([1, 2])", () => {
        const input = ["f", "1", "2"];
        const runtimeLib = {
          f: (args: any, globals: any) => {
            const [ a, b ] = args;
            return +a + +b;
          }
        }

        expect(
          execute(
            input,
            runtimeLib
          )
        ).toEqual(1 + 2);
      })
    })
  })
})