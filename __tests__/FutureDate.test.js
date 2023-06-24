import FutureTime from './../src/js/FutureDate.js'

describe('create a future date object', () => {
    let futureTime;
    beforeEach(() => {
        futureTime = new FutureTime(50, 25)
    })
    test('should create a future date object with two inputs', () => {
        expect(futureTime.futureAge).toEqual(50);
        expect(futureTime.currentAge).toEqual(25);
    })
    test('should calculate the number of years until the future time is reached', () => {
        let earthFuture = futureTime.EarthFuture();
        expect(earthFuture).toEqual(25);
    })
})
