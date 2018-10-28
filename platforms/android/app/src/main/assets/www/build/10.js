webpackJsonp([10],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: function (http) {
                            return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
                        },
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], TermsPageModule);
    return TermsPageModule;
}());

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
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


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.backHome = function () {
        this.navCtrl.setRoot('SettingsPage');
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/terms/terms.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>{{\'terms.title\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <h4>وصف الشروط والمحتوى:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (١) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٢) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٣) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٤) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٥ ) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٦) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٧) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٨) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (٩) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (١٠) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (١١) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (١٢) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (١٣) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (١٥) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n      <h4>البند (١٦) شرط المتفق عليه:</h4>\n      <p>{{\'terms.data\' | translate}}</p>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ })

});
//# sourceMappingURL=10.js.map