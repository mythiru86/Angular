//import {IStack} from './IStack'

///<reference path='./IStack.ts' />


export class DynamicStack<T> implements IStack<T>{

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