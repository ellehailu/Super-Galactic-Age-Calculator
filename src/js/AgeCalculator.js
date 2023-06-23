export default class AgeCalculator{
    constructor(currentYear, birthYear) {
        this.currentYear = currentYear;
        this.birthYear = birthYear;
        let earthAge = this.currentYear - this.birthYear;
    }
    MercuryAge() {
        const merAge = (this.currentYear - this.birthYear) / 0.24;
        console.log(merAge)
        return merAge;
    }
}