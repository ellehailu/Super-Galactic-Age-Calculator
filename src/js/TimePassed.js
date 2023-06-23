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

    JupiterPassed(){
        const jupiterPassed = parseFloat(((this.currentAge - this.pastAge)/11.86).toFixed(2))
        return jupiterPassed
    }
}
