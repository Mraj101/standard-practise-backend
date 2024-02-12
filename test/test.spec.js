import { expect } from "chai";
import Calculator from "./calculator.js";
describe("testing the calculator class", () => {
  it("add function should return 5", () => {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);
    expect(result).to.be.equal(5);
    
  });
  
  it("substract function should return 2", () => {
    const calculator = new Calculator();
    const result = calculator.substract(5, 3);
    expect(result).to.be.equal(2);
    
  });
  
  it("multiply function should return 6", () => {
    const calculator = new Calculator();
    const result = calculator.multiply(2, 3);
    expect(result).to.be.equal(6);
    
  });
  
  it("devide function should return 1", () => {
    const calculator = new Calculator();
    const result = calculator.devide(3, 3);
    expect(result).to.be.equal(1);
   
  });
});
