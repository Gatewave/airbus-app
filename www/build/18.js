webpackJsonp([18],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDetailsPageModule", function() { return GalleryDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(760);
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
                __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]),
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

//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, navParams, animationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animator = animationService.builder();
    }
    GalleryPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    GalleryPage.prototype.animateElem = function () {
        this.animator.setType('pulse').show(this.myElem.nativeElement);
    };
    GalleryPage.prototype.openIt = function () {
        this.navCtrl.push('GalleryDetailsPage');
    };
    GalleryPage.prototype.backHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement'),
        __metadata("design:type", Object)
    ], GalleryPage.prototype, "myElem", void 0);
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gallery',template:/*ion-inline-start:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/gallery/gallery.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title text-center> {{ \'gallery.title\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="backHome()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-row>\n        <ion-col col-12>\n            <ion-card (click)="openIt()">\n                <div class="overlay"></div>\n                <img src="./../../assets/imgs/gallery_cover_1.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p1\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-card (click)="openIt()">\n                <div class="overlay"></div>\n                <img src="./../../assets/imgs/gallery_cover_2.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p2\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-card (click)="openIt()">\n                <div class="overlay"></div>\n                <img src="./../../assets/imgs/gallery_cover_3.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p3\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n        <ion-col col-12>\n            <ion-card (click)="openIt()">\n                <div class="overlay"></div>\n                <img src="./../../assets/imgs/gallery_cover_4.png"/>\n                <div class="card-title">\n                        {{\'gallery.photos.p4\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n        <ion-col col-6>\n            <ion-card (click)="openIt()">\n                <div class="overlay"></div>\n                <img src="./../../assets/imgs/gallery_cover_5.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p5\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/gallery/gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ })

});
//# sourceMappingURL=18.js.map