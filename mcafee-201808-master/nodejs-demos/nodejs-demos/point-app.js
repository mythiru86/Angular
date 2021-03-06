class Point{
        
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



class Point3d extends Point{

    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }

    toString(){
        return `Point3d(${this.x},${this.y},${this.z})`;
    }
}

var origin=new Point();
var pt = new Point3d(3,4,5);

console.log(`distance between ${origin} and ${pt} is ${pt.distance(origin)}`);


