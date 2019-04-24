const { fizzBuzz, fizzBuzzTo100 } = require("./index");

describe("fizzbuzz", () => {
  test("Divisble by 3 = Fizz", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  test("Divsible by 5 = Buzz", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  test("Divsible by 3 and 5 = FizzBuzz", () => {
    expect(fizzBuzz(60)).toBe("FizzBuzz");
  });
});

// describe("fizzBuzzTo100", () => {
//   test("prints fizzbuzz", () => {
//     expect(fizzBuzzTo100()).toBe(console.log());
//   });
// }); Doesn't work properly and is mostly pointless
