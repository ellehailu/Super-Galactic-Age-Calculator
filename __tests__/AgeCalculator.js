import AgeCalculator from './../src/js/AgeCalculator.js'

describe('AgeCalculator', () => {
    test('should correctly create a calculator object with two inputs', () => {
    const ageCalculator = new AgeCalculator(2023, 1998);
    expect(ageCalculator.currentYear).toEqual(2023);
    expect(ageCalculator.birthYear).toEqual(1998);
    })
});