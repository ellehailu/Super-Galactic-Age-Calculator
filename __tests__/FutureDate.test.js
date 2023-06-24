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
    test('should calculate the number of years until the future time is reached in earth years', () => {
        let earthFuture = futureTime.EarthFuture();
        expect(earthFuture).toEqual(25);
    })
    test('should calculate the number of years until the future time is reached in mercury years', () =>{
        let mercuryFuture = futureTime.MercuryFuture();
        expect(mercuryFuture).toBeCloseTo(104.17)
    })
    test('should calculate the number of years until the future time is reached in venus years', () =>{
        let venusFuture = futureTime.VenusFuture();
        expect(venusFuture).toEqual(40.32);
    })
    test('should calculate the number of years until the future time is reached in mars years', () =>{
        let marsFuture = futureTime.MarsFuture();
        expect(marsFuture).toEqual(13.30);
    });
    test('should calculate the number of years until the future time is reached in Jupiter years', () => {
        let jupiterFuture = futureTime.JupiterFuture();
        expect(jupiterFuture).toEqual(2.11)
    })
})
