class Consumer{
    constructor(){
        this.time = new Array(5*60).fill(0);
        this.position = 0;
        this.sum = 0;
        this.count = 0;
    }
    accept(number){
        this.sum = this.sum- this.time[this.position]+ number;
        this.time[this.position]= number;
        this.position = (this.position+1)%this.time.length;
        if(this.count<this.time.length){
            this.count++;
        }
    }
    mean(){
        return this.sum/this.count;
    }
}
const consumer =  new Consumer();
consumer.accept(10);
consumer.accept(20);
consumer.accept(30);
console.log("Mean is: ", consumer.mean());