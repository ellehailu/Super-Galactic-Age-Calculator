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
        expect(earthPassed).toEqual(13);
    });
})

