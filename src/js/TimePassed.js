export default class TimePassed {
    constructor(currentAge, pastAge){
    this.currentAge = currentAge;
    this.pastAge = pastAge;
    }

    EarthPassed(){
        const earthPassed = this.currentAge - this.pastAge;
        console.log(earthPassed)
        return earthPassed;
    }
}


// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)