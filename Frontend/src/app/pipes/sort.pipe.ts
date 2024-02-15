import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    const sortField = args[0];
    const orderField = args[1];
    let mulltiplier = 1

    if(orderField == 'desc'){
      mulltiplier = -1
    }

    if(args.length == 0)
    return value;

    value.sort((a: any, b:any) => {
       if(a[sortField] < b[sortField]) {
       return -1 * mulltiplier;
       }
      else if(a[sortField] > b[sortField]) {
      return 1 * mulltiplier;
      }
      else {
      return 0;
      }
    });
    return value;
  }
   
}
