import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {

    @Input() url: string;
    @Input() description: string;

    // description: string = 'Leão';
    // url: string = 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg'; //https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg
}