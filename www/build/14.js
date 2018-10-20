webpackJsonp([14],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaltourPageModule", function() { return LocaltourPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localtour__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LocaltourPageModule = /** @class */ (function () {
    function LocaltourPageModule() {
    }
    LocaltourPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__localtour__["a" /* LocaltourPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__localtour__["a" /* LocaltourPage */]),
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
    ], LocaltourPageModule);
    return LocaltourPageModule;
}());

//# sourceMappingURL=localtour.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaltourPage; });
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


var LocaltourPage = /** @class */ (function () {
    function LocaltourPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LocalCardList = [
            {
                title: "ايكوتيل دهب",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/dahab.jpg",
            },
            {
                title: "منتجع كانكون",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/kanon.jpg",
            },
            {
                title: "سيزار بالاس",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/sizarbalace.jpg",
            },
            {
                title: "باروتيل اكوا برك",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/akowapark.jpg",
            }
        ];
    }
    LocaltourPage.prototype.backHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    LocaltourPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.LocalCardList = this.LocalCardList.filter(function (LocalCardList) {
                return LocalCardList.title.includes(val.toLowerCase());
            });
        }
    };
    LocaltourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-localtour',template:/*ion-inline-start:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/localtour/localtour.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>سياحه داخليه</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="danger">\n    <ion-searchbar placeholder="ابحث"  (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n\n  <ion-card *ngFor="let LocalCardList of LocalCardList">\n\n    <img [src]="LocalCardList.image" alt="air-bus">\n\n    <ion-card-content>\n      <ion-card-title [innerHTML]="LocalCardList.title"></ion-card-title>\n      <p [innerHTML]="LocalCardList.description"></p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n          اعجاب\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon ios="ios-document" md="md-document"></ion-icon>\n          احجز الان\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          مشاركه\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/localtour/localtour.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LocaltourPage);
    return LocaltourPage;
}());

//# sourceMappingURL=localtour.js.map

/***/ })

});
//# sourceMappingURL=14.js.map