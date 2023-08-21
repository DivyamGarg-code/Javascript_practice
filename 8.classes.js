class Counter{
    constructor(){
        this.counter=0;
    }
    incrementCounter(){
        this.counter++;
        console.log(this.counter);
    }
    decrementCounter(){
        this.counter--;
        console.log(this.counter);
    }
}

const counter1=new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
console.log(counter1.counter);

