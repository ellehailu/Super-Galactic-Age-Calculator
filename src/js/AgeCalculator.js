export default class AgeCalculator{
    constructor(currentYear, birthYear) {
        this.currentYear = currentYear;
        this.birthYear = birthYear;
        let earthAge = this.currentYear - this.birthYear;
    }
    EarthAge() {
        const earthAge = (this.currentYear - this.birthYear)
        return earthAge;
    }
    MercuryAge() {
        const merAge = (this.currentYear - this.birthYear) / 0.24;
        console.log(merAge)
        return merAge;
    }

    VenusAge() {
        const venusAge = (this.currentYear - this.birthYear) / 0.62;
        console.log((venusAge).toFixed(2));
        return venusAge;
    }

    MarsAge() {
        const marsAge = (this.currentYear - this.birthYear) / 1.88;
        return marsAge;
    }

    JupiterAge() {
        const jupiterAge = (this.currentYear - this.birthYear) / 11.86;
        console.log(jupiterAge.toFixed(2))
        return jupiterAge;
    }
}