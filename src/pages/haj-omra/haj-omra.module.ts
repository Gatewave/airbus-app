import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HajOmraPage } from './haj-omra';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    HajOmraPage,
  ],
  imports: [
    IonicPageModule.forChild(HajOmraPage),
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
export class HajOmraPageModule {}
