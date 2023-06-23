import TimePassed from './../src/js/TimePassed.js'

describe('Should create a time passed object', () => {
    let timePassed;
    beforeEach(() => {
        timePassed = new TimePassed(25, 12);
    });
    test('should create a time passed object with two inputs of current age of user and the past age', () => {
    expect(timePassed.currentAge).toEqual(25);
    expect(timePassed.pastAge).toEqual(12);
    })
    test('should calculate how much time has passed in earth years', () =>{
        let earthPassed = timePassed.EarthPassed();
        expect(earthPassed).toBeCloseTo(13);
    });
    test('should calculate how much time has passed in mercury years', () =>{
        let mercuryPassed = timePassed.MercuryPassed();
        expect(mercuryPassed).toBeCloseTo(54.17);
    })
    test('should calculate how much time has passed in venus years', () => {
        let venusPassed = timePassed.VenusPassed();
        expect(venusPassed).toBeCloseTo(20.97);
    })
    test('should calculate how much time has passed in mars years', () => {
        let marsPassed = timePassed.MarsPassed();
        expect(marsPassed).toBeCloseTo(6.91)
    })
    test('should calculate how much time has passed in jupiter years', () => {
        let jupiterPassed = timePassed.JupiterPassed();
        expect(jupiterPassed).toEqual(1.10)
    })
})

