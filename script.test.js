/**
 * @jest-environment jsdom
 */

const {
  operatorsMap,
  operate,
  equalsOperation,
  displayValue,
  storeValue,
  div1,
  div2,
  div3,
  div4,
  div5,
  div6,
  div7,
  div8,
  div9,
  div0
} = require ("./script.js")

describe('equalsOperation', () => {
  it('should correctly add three numbers', () => {
    let value1Store = 3
    let value2Store = 2
    let operator = "+"
    equalsOperation()

    expect(result).toEqual(5)
  });

  it('should correctly add four numbers', () => {
    let value1Store = 3
    let value2Store = 2
    let operator = "+"
    equalsOperation()
    operator = "+"
    value2Store = 5
    equalsOperation()

    expect(result).toEqual(10)
  });

  it('should correctly add five numbers', () => {
    let value1Store = 3
    let value2Store = 2
    let operator = "+"
    equalsOperation()
    operator = "+"
    value2Store = 5
    equalsOperation()
    operator = "+"
    value2Store = 7
    equalsOperation()

    expect(result).toEqual(17)
  });
});