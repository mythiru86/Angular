import {Point} from './point.js';
import {Point3d} from './point3d.js';

(function(){
    var origin=new Point();
    var pt = new Point3d(3,4,5);
    
    console.log(`distance between ${origin} and ${pt} is ${pt.distance(origin)}`);
        
})();

