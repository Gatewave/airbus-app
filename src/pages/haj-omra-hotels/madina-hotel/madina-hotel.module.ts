import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MadinaHotelPage } from './madina-hotel';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    MadinaHotelPage,
  ],
  imports: [
    IonicPageModule.forChild(MadinaHotelPage),
      TranslateModule.forChild({
          loader: {
              provide: TranslateLoader,
              useFactory: (http: HttpClient) => {
                  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
              },
              deps: [HttpClient]
          }
      }),
      Ionic2RatingModule,
  ],
})
export class MadinaHotelPageModule {}
