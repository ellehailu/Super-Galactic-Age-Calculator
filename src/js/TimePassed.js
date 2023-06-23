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

    MercuryPassed(){
        const mercuryPassed = parseFloat(((this.currentAge - this.pastAge)/0.24).toFixed(2));
        console.log(mercuryPassed)
        return mercuryPassed;
    }
    VenusPassed(){
        const venusPassed = parseFloat(((this.currentAge -this.pastAge)/0.62).toFixed(2))
        console.log(venusPassed)
        return venusPassed;
    }
    MarsPassed(){
        const marsPassed = parseFloat(((this.currentAge - this.pastAge)/1.88).toFixed(2))
        return marsPassed;
    }
}


// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)