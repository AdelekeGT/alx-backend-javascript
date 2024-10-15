/* eslint-disable */

// Import Chai's expect function for assertions
const { expect } = require('chai');

// Describe block for the test suite
describe('Testing numbers', () => {
  // Test case: 1 should be equal to 1
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  // Test case: 2 should be equal to 2
  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  // Test case: This one is failing (1 should not be equal to 3), so we skip it
  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  // Test case: 3 should be equal to 3
  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  // Test case: 4 should be equal to 4
  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  // Test case: 5 should be equal to 5
  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  // Test case: 6 should be equal to 6
  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  // Test case: 7 should be equal to 7
  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});