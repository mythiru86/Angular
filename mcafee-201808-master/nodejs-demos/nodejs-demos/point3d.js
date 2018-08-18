import {Point} from './point';

export class Point3d extends Point{

    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }

    toString(){
        return `Point3d(${this.x},${this.y},${this.z})`;
    }
}