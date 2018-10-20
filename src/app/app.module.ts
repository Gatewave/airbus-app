import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp} from './app.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import {SplashScreen} from "@ionic-native/splash-screen";
import { CallNumber } from '@ionic-native/call-number';
import { FileTransfer} from '@ionic-native/file-transfer';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { ImagesProvider } from '../providers/images/images';
import { LanguageProvider } from '../providers/language/language';
import { AnimationService, AnimatesDirective } from 'css-animator';

// Fire-Base
import {FIREBASE_CREDENTIALS} from './firebase.credentials';

//End - Fire-Base




@NgModule({
    declarations: [
    MyApp,
    AnimatesDirective,
    ],


    imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
    // mode:'ios',
        preloadModules: true,
        platforms: {
            ios: {
                backButtonText: '',
                tabsPlacement: 'bottom',
                mode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                alertEnter: 'alert-pop-in',
                alertLeave: 'alert-pop-out',
                popoverEnter: 'popover-pop-in',
                popoverLeave: 'popover-pop-out',
                pickerEnter: 'picker-slide-in',
                pickerLeave: 'picker-slide-out',
                loadingEnter: 'loading-pop-in',
                loadingLeave: 'loading-pop-out',
                actionSheetEnter: 'action-sheet-slide-in',
                actionSheetLeave: 'action-sheet-slide-out'
            },
            android: {
                mode: 'md',
                tabsPlacement: 'bottom' ,

            }
        }
    }),
    //initialize fire base module
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http, './assets/i18n/', '.json');
          },
          deps: [HttpClient]
      }
    }),


    ],
    bootstrap: [IonicApp],


    entryComponents: [
    MyApp,
    ],


    providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LanguageProvider,
    ImagesProvider,
    AnimationService,
    CallNumber,
    Camera,
    FileTransfer,
    SplashScreen,
    File,
    PhotoViewer

    ]
})
export class AppModule { }

