
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { HousingService } from 'src/Services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../IPropertyBase';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent=1;
  properties: Array<IPropertyBase> = [];
  City:any;
  SearchCity:any;
  SelectField:any;
  SortByField:any;
  SortDirection:any;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { 
    
  }

  ngOnInit(): void {
    this.SearchCity = "";
    this.SortDirection = "desc";
    console.log(this.route.snapshot.url.toString());
    if(this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      
      data => {
        this.properties = data;
        
        
        console.log(data)
      }, error => {
        console.log(error);
      }
    );

    }

    onSearchCity(){
      this.SearchCity = this.City;
    }

    clearCity(){
      this.City = "";
      this.SearchCity = "";
    }

    onSortDirection(){
      if(this.SortDirection === "desc"){
        
         this.SortDirection = "asc";
         console.log(this.SortDirection);
      } else {
        this.SortDirection = "desc";
        console.log(this.SortDirection);
      }
    }
  }


