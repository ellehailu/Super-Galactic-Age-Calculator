import FutureTime from './../src/js/FutureDate.js'

describe('create a future date object', () => {
    let futureTime;
    test('create a future date object with two inputs', () => {
        futureTime = new FutureTime(50, 25)
        expect(futureTime.futureAge).toEqual(50);
        expect(futureTime.currentAge).toEqual(25);
    })
})
