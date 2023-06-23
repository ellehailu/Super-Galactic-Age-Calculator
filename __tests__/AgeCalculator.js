import AgeCalculator from './../src/js/AgeCalculator.js'

describe('AgeCalculator', () => {
    let ageCalculator;
    beforeEach(() => {
        ageCalculator = new AgeCalculator(2023, 1998);
    });
    test('should correctly create a calculator object with two inputs', () => {
        expect(ageCalculator.currentYear).toEqual(2023);
        expect(ageCalculator.birthYear).toEqual(1998);
    });
    test('should correctly calculate age on mercury', () => {
        let mercuryAge = ageCalculator.MercuryAge();
        expect(mercuryAge).toBeCloseTo(104.17)
    })
    test('should correctly calculate age on venus', () => {
        let venusAge = ageCalculator.VenusAge();
        expect(venusAge).toBeCloseTo(40.32)
    })
});