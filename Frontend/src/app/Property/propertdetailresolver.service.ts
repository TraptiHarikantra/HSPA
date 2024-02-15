import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { HousingService } from 'src/Services/housing.service';
import { Property } from '../model/property';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertdetailresolverService implements Resolve<Property> {

constructor(
            private housingService: HousingService,
            private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property> {
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId).pipe(
      catchError(error => { this.router.navigate(['/']);
      return of(null);
      })
      
    );
  }

}
