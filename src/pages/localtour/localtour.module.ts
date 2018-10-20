import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocaltourPage } from './localtour';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    LocaltourPage,
  ],
  imports: [
    IonicPageModule.forChild(LocaltourPage),
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
export class LocaltourPageModule {}
