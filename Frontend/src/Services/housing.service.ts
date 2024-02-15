import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPropertyBase } from 'src/app/Property/IPropertyBase';
import { Property } from 'src/app/model/property';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

getProperty(id: number):any{
   return this.getAllProperties().pipe(
    
    map(propertiesArray => {
      return propertiesArray.find(p => (p.Id === id)) as Property;
    })
  );
}

// getProperty(id: number) {
//   return this.getAllProperties().pipe(
//     map(propertiesArray => {
//       return propertiesArray.find(p => p.Id === id) as Property;
//     })
//   );
// }

getAllProperties(sellRent?: number){
 return this.http.get('data/properties.json').pipe(
  map(data => {
    const propertyListArray: Array<IPropertyBase> = [];
    const localProperties = JSON.parse(localStorage.getItem('newPro') || '');
    if(localProperties){
      for (const id in localProperties){
        if(sellRent){
        if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent == sellRent) {
        propertyListArray.push(localProperties[id]);
        }
      }
      else {
        propertyListArray.push(localProperties[id]);
      }

    }
    }
    for (const id in data){
      if(sellRent){
        if(data.hasOwnProperty(id) && data[id].SellRent == sellRent) {
        propertyListArray.push(data[id]);
        }
      }
      else {
        propertyListArray.push(data[id]);
      }
    }
    return propertyListArray;
  })
 );
}

addProperty(property: Property){
  let newProp = [property]
  if(localStorage.getItem('newPro')){
    newProp = [property, ...JSON.parse(localStorage.getItem('newPro') || '')] 
  }
  localStorage.setItem('newPro', JSON.stringify(newProp));
}

newPropId(){
    localStorage.setItem('propId', String(+(localStorage.getItem('propId') || 100) + 1))
   return +(localStorage.getItem('propId') || 0);
}
}

