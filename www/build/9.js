webpackJsonp([9],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageModule", function() { return VideosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VideosPageModule = /** @class */ (function () {
    function VideosPageModule() {
    }
    VideosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__videos__["a" /* VideosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__videos__["a" /* VideosPage */]),
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
    ], VideosPageModule);
    return VideosPageModule;
}());

//# sourceMappingURL=videos.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
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


var VideosPage = /** @class */ (function () {
    function VideosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tap = 0;
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideosPage');
    };
    VideosPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    VideosPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    VideosPage.prototype.backHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-videos',template:/*ion-inline-start:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/videos/videos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{\'videos.title\' | translate}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="cards-bg social-cards">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card (tap)="tapEvent($event)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/favicon.png">\n      </ion-avatar>\n      <h2>{{\'videos.userName\' | translate}}</h2>\n      <p>{{\'videos.postDate\'| translate}}</p>\n    </ion-item>\n\n    <video width="100%" height="100%" poster="../../assets/imgs/londonEye.jpeg"  controls="false">\n      <source src="../../assets/imgs/england.webm" type="video/webm">\n    </video>\n\n    <ion-card-content>\n      <p>{{\'videos.description\'| translate}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{tap}} {{\'videos.like\'| translate}}\n        </button>\n      </ion-col>\n      <!--<ion-col>-->\n        <!--<button ion-button color="primary" clear small icon-start>-->\n          <!--<ion-icon name=\'text\'></ion-icon>-->\n           <!--{{\'videos.comment\'| translate}}-->\n        <!--</button>-->\n      <!--</ion-col>-->\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card (tap)="tapEvent($event)">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/avatar.png">\n      </ion-avatar>\n      <h2>{{\'videos.userName\' | translate}}</h2>\n      <p>{{\'videos.postDate\'| translate}}</p>\n    </ion-item>\n\n    <video width="100%" height="100%" poster="../../assets/imgs/londonEye.jpeg" controls="false">\n      <source src="../../assets/imgs/england.webm" type="video/webm">\n    </video>\n\n    <ion-card-content>\n      <p>{{\'videos.description\'| translate}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{tap}} {{\'videos.like\'| translate}}\n        </button>\n      </ion-col>\n\n      <ion-col align-self-center text-center>\n        <ion-note>\n          30yr ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card (tap)="tapEvent($event)">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/favicon.png">\n      </ion-avatar>\n      <h2>{{\'videos.userName\' | translate}}</h2>\n      <p>{{\'videos.postDate\'| translate}}</p>\n    </ion-item>\n\n    <video width="100%" height="100%" poster="../../assets/imgs/londonEye.jpeg"  controls="false">\n      <source src="../../assets/imgs/england.webm" type="video/webm">\n    </video>\n\n    <ion-card-content>\n    <p>{{\'videos.description\'| translate}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{tap}}  {{\'videos.like\'| translate}}\n        </button>\n      </ion-col>\n\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/mohamedosman/Desktop/Airbus/airbus-app/src/pages/videos/videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ })

});
//# sourceMappingURL=9.js.map