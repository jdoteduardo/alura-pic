import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        PhotoFormModule,
        PhotoListModule,
        PhotoModule,
        CommonModule,
        HttpClientModule
    ]
})
export class PhotosModule {

}
