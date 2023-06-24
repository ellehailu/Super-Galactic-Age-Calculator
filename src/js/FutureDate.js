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
        const venusFuture = parseFloat(((this.futureAge - this.currentAge)/0.62).toFixed(2));
        return venusFuture;
    }
    MarsFuture(){
        const marsFuture = parseFloat(((this.futureAge - this.currentAge)/1.88).toFixed(2));
        return marsFuture;
    }
    JupiterFuture(){
        
    }
}