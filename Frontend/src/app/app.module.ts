import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http'
import { HousingService } from 'src/Services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserService } from 'src/Services/user.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { PropertdetailresolverService } from './Property/propertdetailresolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

const appRoutes: Routes = [
  { path :'', component: PropertyListComponent},
  { path : 'rent-property', component: PropertyListComponent},
  { path :'add-property', component: AddPropertyComponent},
  { path: 'property-detail/:id', component: PropertyDetailComponent, 
               resolve: {prp: PropertdetailresolverService}},
  { path: 'user/login', component: UserLoginComponent},
  { path: 'user/register', component:UserRegisterComponent},
  { path: '**', component: PropertyListComponent}
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent,
      FilterPipe,
      SortPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule,
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
    
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    UserService,
    PropertdetailresolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
