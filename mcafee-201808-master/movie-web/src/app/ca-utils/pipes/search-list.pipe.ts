import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchList"
})
export class SearchListPipe implements PipeTransform {
  transform(list: any[], term?: string, value?: any): any {
    // if no term is specified return entire list
    if (!term || !value) return list;

    return filterList(list, term, value);
  }
}

export function filterList(list: any[], term: string, value: any): any[] {
  return list.filter(item => contains(item, term, value));
}

function contains(item: any, term: string, value: any): boolean {

  const termValue = item[term];

  // fail if current item doesn't have required
  if ( !termValue ) {
    return false;
  }

  return termValue.toString().toLowerCase().indexOf(value.toString().toLowerCase()) >= 0;

}
