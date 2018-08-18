
(function(){
    
    type Name={
        firstName:string;
        middleName?:string;
        lastName:string;
    }


    type Person={
        id?:string|number|null;

        name:Name|string;  //can be either Name or string
        
        email:string;
        phone?:string; //optional
    }


    let people: Person[] =[
        {
            name:{firstName:'Vivek', middleName:'Dutta', lastName:'Mishra'},
            id:7,
            phone:'90360848435',
            email:'vivek@conceptarchitect.in'

        },

        {
            name:'Sanjay Mall',
            id:'sanjay',
            email:'sanjay@sanjay.com'
        },

        {
            name:{firstName:'Shivanshi', lastName:'Mishra'},
            id:null,
            email:'shivanshi@gmail.com'
        }
    ];


    function showPeople(...people:Person[]):void{
        for(let person of people){
            if(person.id)
                console.log('id',person.id);


            if(typeof(person.name)==='string'){
                console.log('name',person.name);                
            }else{
                let {firstName,middleName,lastName}= person.name;                
                console.log('name',`${firstName} ${middleName} ${lastName}`);
            }

            console.log('email',person.email);

            if(person.phone)
                console.log('phone',person.phone);
            
            
            console.log('');
            
        }
    }

    showPeople(...people);


})();