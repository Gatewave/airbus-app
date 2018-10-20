import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallPage } from './call';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {GoogleMapComponent} from "../../components/google-map/google-map";


@NgModule({
  declarations: [
    CallPage,
      GoogleMapComponent,

  ],
  imports: [
    IonicPageModule.forChild(CallPage),
      TranslateModule.forChild({
          loader: {
              provide: TranslateLoader,
              useFactory: (http: HttpClient) => {
                  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
              },
              deps: [HttpClient]
          }
      })

  ],
})
export class CallPageModule {}
