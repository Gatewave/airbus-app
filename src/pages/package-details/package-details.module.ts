import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageDetailsPage } from './package-details';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    PackageDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PackageDetailsPage),
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
export class PackageDetailsPageModule {}
