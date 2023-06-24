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
        
    }
}