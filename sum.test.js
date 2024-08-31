// const sum = require("./sum");
// const myFunction = require("./sum");
// const fetchData = require("./sum");
// const fetchPromise = require("./sum");

test("mock implementation of a basic function", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  expect(mockCallback(1)).toBe(43);
  expect(mockCallback).toHaveBeenCalledWith(1);
});

test("Spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});

// test("test sum", () => {    
//   expect(sum(1, 2)).toBe(3);
// });

// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });

// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test("null is falsy", () => {
//   const n = null;
//   expect(n).toBeFalsy();
// });

// test("zero is falsy", () => {
//   const n = 0;
//   expect(n).toBeFalsy();
// });
// test("one is truthy", () => {
//   const n = 1;
//   expect(n).toBeTruthy();
// });

// test("throw on invalid input", () => {
//   expect(() => {
//     myFunction("hello");
//   }).toThrow();
// });

// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("done");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData(callback);
// });

// test("the data is peanut butter", async () => {
//   return expect(fetchPromise()).resolves.toBe("done");
// });

// test("the fetch fails with an error", async () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

// test("the data is peanut butter", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("done");
// });
