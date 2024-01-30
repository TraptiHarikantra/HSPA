import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from '../IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent;

propertyTpes: Array<string> = ['House', 'Apartment', 'Duplex'];
furnishTypes: Array<string> = ['Fully', 'semi', 'Unfurnished'];
mainEntrance: Array<string> = ['North', 'East', 'West', 'South'];
propertyView: IPropertyBase = {
  Id:0,
  PType: '',
  FType: '',
  Name: '',
  SellRent: 0,
  Price: 0,
  RTM: 0,
  BuiltArea: '',
  City: '',
  BHK: ''
};

onSubmit() {
//console.log(form);
//console.log(this.addPropertyForm);
}

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/'])
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
