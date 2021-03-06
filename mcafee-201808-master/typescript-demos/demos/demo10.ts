
(function(){
    
    class Person{
        private name:string;
        private email:string;
        private phone:string|null;

        constructor(name:string, email:string, phone:string|null=null){
            this.name=name;
            this.email=email;
            this.phone=phone;
        }

        toString():string{
            return `Person(Name=${this.name}\tEmail=${this.email}\tphone=${this.phone||''}`;
        }

    }


    let people:Person[]=[
        new Person('Vivek','vivek@conceptarchitect.in','9036084835'),
        new Person('Sanjay','sanjay@conceptarchitect.in')
    ];

    function showPeople(...people:Person[]):void{
        for(let person of people){
      
            console.log(person.toString());
            
        }
    }

    showPeople(...people);


})();