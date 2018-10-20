webpackJsonp([10],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportaionPageModule", function() { return TransportaionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transportaion__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TransportaionPageModule = /** @class */ (function () {
    function TransportaionPageModule() {
    }
    TransportaionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transportaion__["a" /* TransportaionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transportaion__["a" /* TransportaionPage */]),
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
    ], TransportaionPageModule);
    return TransportaionPageModule;
}());

//# sourceMappingURL=transportaion.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportaionPage; });
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
 * Generated class for the TransportaionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransportaionPage = /** @class */ (function () {
    function TransportaionPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.slidesList = [
            {
                title: "هل تريد الان  بحجز حافلة سياحية؟",
                description: "<b>استمتع بسهوله الحجز<b/> من خلال تطبيقنا",
                image: "../../assets/imgs/bus.png",
            }
        ];
    }
    TransportaionPage.prototype.goToSlide = function () {
        this.slides.slideNext(500, true);
    };
    TransportaionPage.prototype.slideChanged = function () {
        this.slides.slidePrev(500, true);
    };
    TransportaionPage.prototype.backHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    TransportaionPage.prototype.presentLoading = function () {
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
    ], TransportaionPage.prototype, "slides", void 0);
    TransportaionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transportaion',template:/*ion-inline-start:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/transportaion/transportaion.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>نقل سياحى</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="tutorial-page">\n\n  <ion-slides pager dir="rtl">\n\n\n    <ion-slide *ngFor="let slidesList of slidesList">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slidesList.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slidesList.title"></h2>\n      <p [innerHTML]="slidesList.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <span>طلب حجز حافلة سياحية</span>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n\n      <ion-list padding>\n        <ion-item>\n          <ion-input required placeholder="اسم الشركة" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="البريد الاليكتروني" type="mail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="رقم الهاتف" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="رقم أخر" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>نوع الحافلة</ion-label>\n          <ion-select required [(ngModel)]="rooms">\n            <ion-option value="h">نوع الحافلة</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>عدد الحافلات</ion-label>\n          <ion-select required [(ngModel)]="rooms">\n            <ion-option value="h">عدد الحافلات</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-list margin-bottom radio-group [(ngModel)]="autoManufacturers">\n          <ion-item>\n            <ion-label stacked> ذهاب فقط </ion-label>\n            <ion-radio value="oneWay"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>ذهاب و عودة</ion-label>\n            <ion-radio value="twoWay"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>وجهات متعددة</ion-label>\n            <ion-radio value="many"></ion-radio>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <span>بيانات رحلة الذهاب</span>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n\n        <ion-item>\n          <ion-label stacked>اختر اليوم</ion-label>\n          <ion-select [(ngModel)]="rooms">\n            <ion-option value="h">اختر اليوم</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label no-margin>التاريخ</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="المدينة من" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="المدينة الى" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="موقع التشغيل" type="text"></ion-input>\n        </ion-item>\n   <ion-item>\n          <ion-input placeholder="ساعة تواجد الحافلة" type="text"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button full  round color="danger">احجز الرحلة</button>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="presentLoading()" color="primary">انهاء</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img src="../../assets/imgs/04.png" class="slide-image"/>\n      <h2 class="slide-title">لقد قمت بالحجز بنجاح شكرا لك</h2>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/transportaion/transportaion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TransportaionPage);
    return TransportaionPage;
}());

//# sourceMappingURL=transportaion.js.map

/***/ })

});
//# sourceMappingURL=10.js.map