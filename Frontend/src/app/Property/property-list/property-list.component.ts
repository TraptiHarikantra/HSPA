
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { HousingService } from 'src/Services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../IPropertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent=1;
  properties: Array<IPropertyBase> = [];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { 
    
  }

  ngOnInit(): void {
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
  }


