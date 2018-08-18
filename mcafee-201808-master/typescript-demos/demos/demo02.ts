
class Point{

    private x;
    private y;

    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }

    toString(){
        return `Point(${this.x},${this.y})`;
    }
    distance(p2){
        let dx= this.x-p2.x;
        let dy= this.y-p2.y;

        return Math.sqrt(dx*dx+dy*dy);
    }

}

let p1= new Point(3,4);
let origin= new Point();

console.log(`distance between ${p1} and ${origin} is ${p1.distance(origin)}`);



