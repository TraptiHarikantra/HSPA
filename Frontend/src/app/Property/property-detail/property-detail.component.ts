import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { error } from 'console';
import { HousingService } from 'src/Services/housing.service';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  public property: Property;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private housingService: HousingService) { }

  ngOnInit() {
    this.property = new Property();
    this.propertyId =+ this.route.snapshot.params['id'];

    this.route.data.subscribe(
      data => {
        this.property = data['prp'];
      }
    )

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/Image/interior.jpg',
        medium: 'assets/Image/interior.jpg',
        big: 'assets/Image/interior.jpg'
      },
      {
        small: 'assets/Image/interior2.jpg',
        medium: 'assets/Image/interior2.jpg',
        big: 'assets/Image/interior2.jpg'
      },
      {
        small: 'assets/Image/interior3.jpg',
        medium: 'assets/Image/interior3.jpg',
        big: 'assets/Image/interior3.jpg'
      },{
        small: 'assets/Image/interior4.jpg',
        medium: 'assets/Image/interior4.jpg',
        big: 'assets/Image/interior4.jpg'
      }
    ];

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId =+ params['id'];
    //     console.log(this.propertyId);
        
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (                             data: Property) =>{ 
    //        this.property = data
    //       }
    //     );
    //   }
    // )


  }

  clickNextPage(){
    this.propertyId += 1;
    this.router.navigate(['property-detail/'+ this.propertyId])

  }

}
