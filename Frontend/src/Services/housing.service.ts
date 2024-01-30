import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IPropertyBase } from 'src/app/Property/IPropertyBase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

getAllProperties(sellRent: number){
 return this.http.get('data/properties.json').pipe(
  map(data => {
    const propertyListArray: Array<IPropertyBase> = [];
    for (const id in data){
        if(data.hasOwnProperty(id) && data[id].SellRent == sellRent) {
        propertyListArray.push(data[id]);
        }
    }
    return propertyListArray;
  })
 );
}

}
