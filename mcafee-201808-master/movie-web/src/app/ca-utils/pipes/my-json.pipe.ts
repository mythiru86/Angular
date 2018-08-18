import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myJson'
})
export class MyJsonPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return JSON.stringify(value);
    
  }

}
