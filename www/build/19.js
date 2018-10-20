webpackJsonp([19],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDetailsPageModule", function() { return GalleryDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_details__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GalleryDetailsPageModule = /** @class */ (function () {
    function GalleryDetailsPageModule() {
    }
    GalleryDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery_details__["a" /* GalleryDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery_details__["a" /* GalleryDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: function (http) {
                            return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
                        },
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
        })
    ], GalleryDetailsPageModule);
    return GalleryDetailsPageModule;
}());

//# sourceMappingURL=gallery-details.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GalleryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryDetailsPage = /** @class */ (function () {
    function GalleryDetailsPage(navCtrl, navParams, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
    }
    GalleryDetailsPage.prototype.openIt = function () {
        this.photoViewer.show('./../../assets/imgs/trip_gallery_cover_.jpg');
    };
    GalleryDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gallery-details',template:/*ion-inline-start:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/gallery-details/gallery-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>{{\'gallery-details.title\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-row>\n    <ion-col col-12>\n      <img src="./../../assets/imgs/trip_gallery_cover_.jpg"/>\n      <p>\n        رحلات نصف العام مع شركة اير باص .. المتعة و الرفاهية و أفضل العروض معنا\n        تسعدنا خدمتك للوصول إلي اعلي درجات الرفاهية مع موديلات 2018 مع اير باص .. متعة التنقل و رفاهية الرحلة…\n      </p>\n    </ion-col>\n    <ion-col col-12>\n      <ion-card (click)="openIt()">\n        <div class="overlay"></div>\n        <img src="./../../assets/imgs/gallery_cover_1.jpg"/>\n      </ion-card>\n    </ion-col>\n\n    <ion-col col-6>\n      <ion-card (click)="openIt()">\n        <div class="overlay"></div>\n        <img src="./../../assets/imgs/gallery_cover_2.jpg"/>\n      </ion-card>\n    </ion-col>\n\n    <ion-col col-6>\n      <ion-card (click)="openIt()">\n        <div class="overlay"></div>\n        <img src="./../../assets/imgs/gallery_cover_4.png"/>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/gallery-details/gallery-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], GalleryDetailsPage);
    return GalleryDetailsPage;
}());

//# sourceMappingURL=gallery-details.js.map

/***/ })

});
//# sourceMappingURL=19.js.map