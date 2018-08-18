
(function(){
    
   interface IStack<T>{
        push( item:T ):void;
        pop():T;
        count: ()=>number;
   }

   class DynamicStack<T> implements IStack<T>{

        private elements:T[] =[];
        private _count=0;

       push(item: T): void {
           this.elements.push(item);
           this._count++;
       }       
       
       pop(): T {
           if(this.count()==0)
                throw new Error('Underflow Exception');
            return  this.elements[--this._count];

       }
       count(): number {
           return this._count;
       }

       isEmpty():boolean{
           return this._count==0;
       }

       toString(): string{
            let str='Stack[\t';

            for(let i=0;i<this._count;i++){
                str= `${str}${this.elements[i]}\t`;
            }

            str=`${str}]`;

            return str;
       }

   }
       

   function testStack<T>(stack:IStack<T>, ... testData:T[]):void{

        console.log('pushing given values...');
        for(let data of testData)
            stack.push(data);

        console.log('after push', stack.toString());

        while(stack.count()>0)
            console.log('popped', stack.pop());
   }


   let strStack=new DynamicStack<string>();

   testStack(strStack, 'India','USA','UK','France');
   



})();