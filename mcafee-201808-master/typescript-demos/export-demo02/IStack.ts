

export interface IStack<T>{
    push( item:T ):void;
    pop():T;
    count: ()=>number;
}