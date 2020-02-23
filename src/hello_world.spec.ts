import { helloWorld } from "./hello_world"

describe("helloWorld", () => {
  it("returns 'hello world'", () => {
    expect(helloWorld()).toBe("hello world");
  })
})