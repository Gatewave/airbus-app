webpackJsonp([11],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function() { return TicketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TicketsPageModule = /** @class */ (function () {
    function TicketsPageModule() {
    }
    TicketsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */]),
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
    ], TicketsPageModule);
    return TicketsPageModule;
}());

//# sourceMappingURL=tickets.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
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


var TicketsPage = /** @class */ (function () {
    function TicketsPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.slidesList = [
            {
                title: "خلال اير باص احجز تذاكر الطيران !",
                description: "<b>استمتع بسهوله الحجز<b/> من خلال تطبيقنا",
                image: "../../assets/imgs/ticket.png",
            },
            {
                title: "تمتع بالسفر حول العالم..",
                description: "أدخل بيناتك كامله ولا تنسى التاكيد شكرا",
                image: "../../assets/imgs/03.png",
            }
        ];
    }
    TicketsPage.prototype.goToSlide = function () {
        this.slides.slideNext(500, true);
    };
    TicketsPage.prototype.slideChanged = function () {
        this.slides.slidePrev(500, true);
    };
    TicketsPage.prototype.backHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    TicketsPage.prototype.presentLoading = function () {
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
    ], TicketsPage.prototype, "slides", void 0);
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tickets',template:/*ion-inline-start:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/tickets/tickets.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>تذاكر طيران</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager dir="rtl">\n\n\n    <ion-slide *ngFor="let slidesList of slidesList">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slidesList.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slidesList.title"></h2>\n      <p [innerHTML]="slidesList.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n        <ion-item>\n          <ion-input required placeholder="اسم العميل" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="أدخل بريدك الإلكتروني" type="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input required placeholder="رقم الهاتف" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="رقم اخر" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-list radio-group [(ngModel)]="autoManufacturers">\n        <ion-item>\n          <ion-label stacked> ذهاب فقط </ion-label>\n          <ion-radio value="oneWay"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>ذهاب و عودة</ion-label>\n          <ion-radio value="twoWay"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>وجهات متعددة</ion-label>\n          <ion-radio value="many"></ion-radio>\n        </ion-item>\n        </ion-list>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n        <ion-item>\n          <ion-label no-margin>تاريخ السفر</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="بلد المغادرة" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="مدينة المغادرة" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="بلد الوصول" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="مدينة الوصول" type="text"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n\n        <ion-item>\n          <ion-label  stacked>البالغين (+12)سنة</ion-label>\n          <ion-select required [(ngModel)]="teen">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الاطفال (2-12) سنة</ion-label>\n          <ion-select [(ngModel)]="kids">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الرضع (0-2) سنة</ion-label>\n          <ion-select [(ngModel)]="babes">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الدرجة المطلوبة</ion-label>\n          <ion-select [(ngModel)]="room-kind">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="الشركة الناقلة" type="text"></ion-input>\n        </ion-item>\n        <button ion-button full  round color="danger">احجز الرحلة</button>\n\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="presentLoading()" color="primary">انهاء</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img src="../../assets/imgs/04.png" class="slide-image"/>\n      <h2 class="slide-title">لقد قمت بالحجز بنجاح شكرا لك</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/tickets/tickets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ })

});
//# sourceMappingURL=11.js.map