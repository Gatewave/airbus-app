import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryDetailsPage } from './gallery-details';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    GalleryDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryDetailsPage),
      TranslateModule.forChild({
          loader: {
              provide: TranslateLoader,
              useFactory: (http: HttpClient) => {
                  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
              },
              deps: [HttpClient]
          }
      }),
  ],
})
export class GalleryDetailsPageModule {}
