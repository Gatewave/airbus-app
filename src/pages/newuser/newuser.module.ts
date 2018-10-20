import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewuserPage } from './newuser';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    NewuserPage,
  ],
  imports: [
    IonicPageModule.forChild(NewuserPage),
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
export class NewuserPageModule {}
