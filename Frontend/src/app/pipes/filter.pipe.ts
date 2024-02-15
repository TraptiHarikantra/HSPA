import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string, propName:string): any[] | null | undefined {
    const arrayProp = [];
    if(value){
      if(value.length === 0 || filterString == "" || propName =="" ) {
        return value;
      }
    }
    
    for(let item of value){
      if(item[propName] == filterString)
      arrayProp.push(item);
    }
    return arrayProp;
  }

}
