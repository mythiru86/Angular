
(function(){
    

    type Person={
        name:string;
        email:string;
        phone?:string; //optional
    }


    let person:Person={
        name:'Vivek',
        email:'vivek@conceptarchitect.in'
    };
    console.log('person',person);

    //person is an object of a type that contains name:string, email:string

    person.phone='90360 84835'; //this typehas no phone property

    let person2:Person={
        name:'Vivek',
        phone:'9036084835',
        email:'vivek@conceptarchitect.in'
    };

    console.log('person2',person2);
    




})();