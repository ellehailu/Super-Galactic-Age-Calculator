export default class FutureTime{
    constructor(futureAge, currentAge){   
        this.futureAge = futureAge;
        this.currentAge = currentAge; 
    }
    EarthFuture(){
        const earthFuture = this.futureAge - this.currentAge;
        return earthFuture;
    }
    MercuryFuture(){
        const mercuryFuture = parseFloat(((this.futureAge - this.currentAge)/0.24).toFixed(2));
        return mercuryFuture;
    }
    VenusFuture(){
        
    }
}