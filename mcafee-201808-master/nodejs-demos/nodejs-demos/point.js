export class Point{
        
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