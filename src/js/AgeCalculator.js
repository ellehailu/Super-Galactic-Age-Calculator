export default class AgeCalculator{
    constructor(currentYear, birthYear) {
        this.currentYear = currentYear;
        this.birthYear = birthYear;
        let earthAge = this.currentYear - this.birthYear;
    }
}