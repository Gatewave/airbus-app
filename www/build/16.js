webpackJsonp([16],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsPageModule", function() { return HotelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotels__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HotelsPageModule = /** @class */ (function () {
    function HotelsPageModule() {
    }
    HotelsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hotels__["a" /* HotelsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hotels__["a" /* HotelsPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: function (http) {
                            return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
                        },
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
        })
    ], HotelsPageModule);
    return HotelsPageModule;
}());

//# sourceMappingURL=hotels.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
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
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HotelsPage = /** @class */ (function () {
    function HotelsPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.slidesList = [
            {
                title: "قم الان من خلال اير باص بالحجز بسهوله !",
                description: "<b>استمتع بسهوله الحجز<b/> من خلال تطبيقنا",
                image: "../../assets/imgs/02.png",
            },
            {
                title: "قم الان بادخال بيناتك",
                description: "أدخل بيناتك كامله ولا تنسى التاكيد شكرا",
                image: "../../assets/imgs/01.png",
            }
        ];
    }
    HotelsPage.prototype.goToSlide = function () {
        this.slides.slideNext(500, true);
    };
    HotelsPage.prototype.slideChanged = function () {
        this.slides.slidePrev(500, true);
    };
    HotelsPage.prototype.backHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    HotelsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "جارى حفظ الحجز",
            duration: 3000
        });
        loader.present();
        this.navCtrl.setRoot('HomePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], HotelsPage.prototype, "slides", void 0);
    HotelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hotels',template:/*ion-inline-start:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/hotels/hotels.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>حجوزات فنادق</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager dir="rtl">\n\n\n    <ion-slide *ngFor="let slidesList of slidesList">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slidesList.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slidesList.title"></h2>\n      <p [innerHTML]="slidesList.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n        <ion-item>\n          <ion-input  placeholder="اسم العميل" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="الهاتف" type="tel"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="أدخل بريدك الإلكتروني" type="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="اسم المدينة" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="اسم الفندق" type="text"></ion-input>\n        </ion-item>\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n\n        <ion-item>\n          <ion-label stacked>عدد النجوم</ion-label>\n          <ion-select [(ngModel)]="stars">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>عدد الغرف</ion-label>\n          <ion-select [(ngModel)]="rooms">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>عدد الافراد</ion-label>\n          <ion-select [(ngModel)]="count">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>البالغين (+12)سنة</ion-label>\n          <ion-select [(ngModel)]="teen">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الاطفال (2-12) سنة</ion-label>\n          <ion-select [(ngModel)]="kids">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الرضع (0-2) سنة</ion-label>\n          <ion-select [(ngModel)]="babes">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>نوع الغرفة</ion-label>\n          <ion-select [(ngModel)]="room-kind">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>نوع الإطلالة</ion-label>\n          <ion-select [(ngModel)]="apperance">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button full  round color="danger">احجز الرحلة</button>\n\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="presentLoading()" color="primary">انهاء</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img src="../../assets/imgs/04.png" class="slide-image"/>\n      <h2 class="slide-title">لقد قمت بالحجز بنجاح شكرا لك</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/hotels/hotels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HotelsPage);
    return HotelsPage;
}());

//# sourceMappingURL=hotels.js.map

/***/ })

});
//# sourceMappingURL=16.js.map