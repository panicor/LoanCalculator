
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {amount: 100, years: 10, rate: 7}
  expect(calculateMonthlyPayment(values)).toEqual("1.16");
});

it("should return a result with 2 decimal places", function() {
  // ..
  let values = {amount: 200, years: 10, rate: 7}
  expect(calculateMonthlyPayment(values)).toEqual("2.32");
});

it("should throw error if final calculation is NaN", function(){
  let values = {amount: "ash", years: "kalow", rate: "ue"};
  expect(calculateMonthlyPayment(values)).toThrow(new Error("Please enter a number"));
})
/// etc
