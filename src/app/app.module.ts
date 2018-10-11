import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { CallNumber } from '@ionic-native/call-number';
import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {SplashScreen} from "@ionic-native/splash-screen";
import { Camera } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ImagesProvider } from '../providers/images/images';
import { LanguageProvider } from '../providers/language/language';
import { MyApp } from './app.component';
import {NewuserPage} from "../pages/newuser/newuser";
import { AnimationService, AnimatesDirective } from 'css-animator';

// Fire-Base
import {FIREBASE_CREDENTIALS} from './firebase.credentials';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from "angularfire2/database";
//End - Fire-Base

import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import {SigninPage} from "../pages/signin/signin";
import {ForgetpassPage} from "../pages/forgetpass/forgetpass";
import {HajOmraPage} from "../pages/haj-omra/haj-omra";
import {LocaltourPage} from "../pages/localtour/localtour";
import {InterntourPage} from "../pages/interntour/interntour";
import {TransportaionPage} from "../pages/transportaion/transportaion";
import {TicketsPage} from "../pages/tickets/tickets";
import {HotelsPage} from "../pages/hotels/hotels";
import { Ionic2RatingModule } from 'ionic2-rating';
import {VideosPage} from "../pages/videos/videos";
import {GalleryPage} from "../pages/gallery/gallery";
import {CallPage} from "../pages/call/call";
import {AboutusPage} from "../pages/aboutus/aboutus";
import {SettingsPage} from "../pages/settings/settings";
import {GoogleMapComponent} from "../components/google-map/google-map";
import {TermsPage} from "../pages/terms/terms";
import {ProfilePage} from "../pages/profile/profile";
import {PackageDetailsPage} from "../pages/package-details/package-details";
import {MadinaHotelPage} from "../pages/haj-omra-hotels/madina-hotel/madina-hotel";
import {MakaHotelPage} from "../pages/haj-omra-hotels/maka-hotel/maka-hotel";
import {GalleryDetailsPage} from "../pages/gallery-details/gallery-details";


@NgModule({
  declarations: [
    MyApp,
    NewuserPage,
    AnimatesDirective,
    ProfilePage,
    HomePage,
    SigninPage,
    ForgetpassPage,
    HajOmraPage,
    MadinaHotelPage,
    MakaHotelPage,
    PackageDetailsPage,
    LocaltourPage,
    InterntourPage,
    TransportaionPage,
    TicketsPage,
    HotelsPage,
    GalleryPage,
    GalleryDetailsPage,
    VideosPage,
    CallPage,
    AboutusPage,
    SettingsPage,
    TermsPage,
    GoogleMapComponent,



  ],
  imports: [
      BrowserModule,
      Ionic2RatingModule,
      HttpModule,
      HttpClientModule,
      IonicModule.forRoot(MyApp, {
              preloadModules:true,
              platforms:{
                  ios:{
                      tabsPlacement: 'bottom',
                      mode:'ios',
                      modalEnter:'modal-slide-in',
                      modalLeave:'modal-slide-out',
                      alertEnter:'alert-pop-in',
                      alertLeave:'alert-pop-out',
                      popoverEnter:'popover-pop-in',
                      popoverLeave:'popover-pop-out',
                      pickerEnter:'picker-slide-in',
                      pickerLeave:'picker-slide-out',
                      loadingEnter:'loading-pop-in',
                      loadingLeave:'loading-pop-out',
                      actionSheetEnter:'action-sheet-slide-in',
                      actionSheetLeave:'action-sheet-slide-out'
                  },
                  android:{
                      mode:'md',
                      tabsPlacement: 'bottom',

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
    NewuserPage,
    ProfilePage,
    HomePage,
    SigninPage,
    ForgetpassPage,
    HajOmraPage,
    MadinaHotelPage,
    MakaHotelPage,
    PackageDetailsPage,
    LocaltourPage,
    InterntourPage,
    TransportaionPage,
    TicketsPage,
    HotelsPage,
    GalleryPage,
    GalleryDetailsPage,
    VideosPage,
    CallPage,
    AboutusPage,
    SettingsPage,
    TermsPage,


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

