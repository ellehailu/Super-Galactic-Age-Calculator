import TimePassed from './../src/js/TimePassed.js'

describe('Should create a time passed object', () => {
    let timePassed;
    beforeEach(() => {
        timePassed = new TimePassed(12, 25);
    });
    test('should create a time passed object with two inputs of current age of user and the past age', () => {
    expect(timePassed.pastAge).toEqual(12);
    expect(timePassed.currentAge).toEqual(25);
    })
})

