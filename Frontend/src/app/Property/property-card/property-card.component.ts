import { Component, Input } from "@angular/core";
import { IPropertyBase } from "../IPropertyBase";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: ['h1 {font-weight: normal;}']
    styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent {
    @Input() propertyName: IPropertyBase;
    @Input() hideIcon: boolean;
    // Property: any = {
    //     "Id":1,
    //     "Type": "House",
    //     "Name": "Birla House1",
    //     "Price": "12000"
    // }
}