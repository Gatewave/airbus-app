webpackJsonp([17],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    AboutusPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aboutus',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/aboutus/aboutus.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>aboutus</ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row>\n    <ion-col col-12>\n      <img src="../../assets/imgs/airbus.jpg" alt="air-bus">\n      <h5 padding>من نحن</h5>\n      <article padding>\n        تمثلت النظره الاستراتيجيه لشركه ايرباص منذ انشائها كشركة للسياحة عام 1988بوضع اسس تحلّت بالإصرار للصعود الى القمة والبقاء عليها لتحقيق رؤيتها المستقبلية، يحيط ذلك الفكر تقديم أرقي مستويات الخدمة بحضور الأمانة والمصداقية والإخلاص في العمل . جاهدين في ذلك لتجاوز حاجز التوقعات والسعي لخلق تاثيرملحوظ  ودور ريادي بالقطاع السياحي المصري .\n        ومن خلال الدعم والمتابعة المستمرة من إدارة الشركة بتولى فريق من الكفاءات لتحقيق الرؤية بإتباع وتطوير السياسات العلمية والعملية التي انبتت ثمار جهودهاعلي ارض الواقع لتصبح ايرباص للسياحه الشركه الاكثر انتشارا بمصر كائنا في اكثر من 14 فرع داخل و خارج مصر .\n      </article>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/aboutus/aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HajOmraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package_details_package_details__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
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
 * Generated class for the HajOmraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HajOmraPage = /** @class */ (function () {
    function HajOmraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HajOmraList = [
            {
                title: "الحج الاقتصادى",
                description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
                price: " ١٠١٠ ج ",
            },
            {
                title: "الحج المميز",
                description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
                price: " ١٠١٠ ج ",
            },
            {
                title: "العمره الاقتصادى",
                description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
                price: " ١٠١٠ ج ",
            },
            {
                title: "عمره قبل المولد النبوى",
                description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
                price: " ١٠١٠ ج ",
            }
        ];
    }
    HajOmraPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    HajOmraPage.prototype.packageDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__package_details_package_details__["a" /* PackageDetailsPage */]);
    };
    HajOmraPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HajOmraPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.HajOmraList = this.HajOmraList.filter(function (HajOmraList) {
                return HajOmraList.title.includes(val.toLowerCase());
            });
        }
    };
    HajOmraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-haj-omra',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/haj-omra/haj-omra.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>الحج و العمره</ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let HajOmraList of HajOmraList" (click)="packageDetails()">\n    <img animates #animation6="animates" [src]="HajOmraList.image"/>\n    <div class="card-title">\n<span [innerHTML]="HajOmraList.title"></span>\n      <rating [(ngModel)]="rate" max="5" halfStarIconName="star-half" (ngModelChange)="onModelChange($event)"></rating>\n    </div>\n    <div class="card-subtitle" [innerHTML]="HajOmraList.price"></div>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/haj-omra/haj-omra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HajOmraPage);
    return HajOmraPage;
}());

//# sourceMappingURL=haj-omra.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageDetailsPage = /** @class */ (function () {
    function PackageDetailsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.Hotels = [
            {
                title: "فندق الحرمين",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
            },
            {
                title: "فندق المدينه",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
            },
            {
                title: "فندق الرحمه",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
            },
            {
                title: "فندق الفتح",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
            }
        ];
        this.reserve = "partA";
        this.testRadioOpen = false;
    }
    PackageDetailsPage.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = true;
        this.slides.paginationType = "progress";
        this.slides.dir = "_ltr";
    };
    PackageDetailsPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('بيانات الحجز');
        alert.addInput({
            type: 'radio',
            label: 'احجز لنفس بينات الحساب',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'احجز لبينات حساب اخر',
            value: 'green'
        });
        // alert.addButton('Cancel');
        alert.addButton({
            text: 'التالى',
            cssClass: 'ion-button',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], PackageDetailsPage.prototype, "slides", void 0);
    PackageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-package-details',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/package-details/package-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{\'packageDetail.title\' | translate}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment  color="danger"  [(ngModel)]="reserve">\n      <ion-segment-button   value="partA">\n        {{\'packageDetail.tabs.1\'| translate}}\n      </ion-segment-button>\n      <ion-segment-button   value="partB">\n        {{\'packageDetail.tabs.2\'| translate}}\n      </ion-segment-button>\n      <ion-segment-button   value="partC">\n        {{\'packageDetail.tabs.3\'| translate}}\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <div class="info_bar">\n    <p>\n      <span>{{\'packageDetail.trip.name\'| translate}}</span>\n      <span>{{\'packageDetail.trip.place\'| translate}}</span>\n      <span>{{\'packageDetail.trip.cost\'| translate}}</span>\n    </p>\n    <rating [(ngModel)]="rate" max="5" halfStarIconName="star-half" (ngModelChange)="onModelChange($event)"></rating>\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="reserve">\n\n    <div *ngSwitchCase="\'partA\'">\n\n      <ion-slides #slides dir="rtl" [pager]="true" loop="true" onload="startAutoplay()" style="background-color: black">\n        <ion-slide *ngFor="let image of [1,2,3,4,5]">\n          <img height="50%" data-src="../assets/imgs/slide{{image}}.jpg">\n        </ion-slide>\n      </ion-slides>\n\n      <section padding>\n        <p>{{\'packageDetail.trip.date\'| translate}}</p>\n\n        <h5>{{\'packageDetail.trip.title-desc\'| translate}}</h5>\n\n        <article margin-bottom>\n          {{\'packageDetail.trip.details\'| translate}}\n          {{\'packageDetail.trip.details\'| translate}}\n        </article>\n        <button ion-button full round block (click)="doRadio()" color="danger">احجز الان </button>\n      </section>\n\n     </div>\n\n    <div *ngSwitchCase="\'partB\'">\n\n      <ion-list radio-group>\n        <ion-item>\n          <ion-label>\n          <h5>اليوم الاول</h5>\n          <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left  value="cord"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الثانى</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="duesenberg"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الثلاث</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="hudson"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الرابع</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="packard"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الخامس</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="studebaker"></ion-radio>\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button full round block (click)="doRadio()" color="danger">احجز الان </button>\n\n    </div>\n\n\n    <div *ngSwitchCase="\'partC\'">\n\n      <ion-card *ngFor="let Hotels of Hotels">\n\n        <img [src]="Hotels.image" alt="air-bus">\n\n        <ion-card-content>\n          <ion-card-title [innerHTML]="Hotels.title"></ion-card-title>\n          <p [innerHTML]="Hotels.description"></p>\n        </ion-card-content>\n\n        <ion-row no-padding>\n          <ion-col>\n            <button ion-button clear small color="danger" icon-start>\n              <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n              اعجاب\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button clear small color="danger" icon-start>\n              <ion-icon ios="ios-document" md="md-document"></ion-icon>\n              احجز الان\n            </button>\n          </ion-col>\n          <ion-col text-right>\n            <button ion-button clear small color="danger" icon-start>\n              <ion-icon name=\'share-alt\'></ion-icon>\n              مشاركه\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/package-details/package-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PackageDetailsPage);
    return PackageDetailsPage;
}());

//# sourceMappingURL=package-details.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaltourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
 * Generated class for the LocaltourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
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
            selector: 'page-localtour',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/localtour/localtour.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>سياحه داخليه</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="danger">\n    <ion-searchbar placeholder="ابحث"  (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n\n  <ion-card *ngFor="let LocalCardList of LocalCardList">\n\n    <img [src]="LocalCardList.image" alt="air-bus">\n\n    <ion-card-content>\n      <ion-card-title [innerHTML]="LocalCardList.title"></ion-card-title>\n      <p [innerHTML]="LocalCardList.description"></p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n          اعجاب\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon ios="ios-document" md="md-document"></ion-icon>\n          احجز الان\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          مشاركه\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/localtour/localtour.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LocaltourPage);
    return LocaltourPage;
}());

//# sourceMappingURL=localtour.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterntourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
 * Generated class for the InterntourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterntourPage = /** @class */ (function () {
    function InterntourPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InternCardList = [
            {
                title: "جيمس الحمرا",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/sizarbalace.jpg",
            },
            {
                title: "جزيرة بينانج و كوالا",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/binag.jpg",
            },
            {
                title: "بلازا بيروت",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/blaza-birot.jpg",
            },
            {
                title: "كوالا",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/kola.jpg",
            }
        ];
    }
    InterntourPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    InterntourPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.InternCardList = this.InternCardList.filter(function (InternCardList) {
                return InternCardList.title.includes(val.toLowerCase());
            });
        }
    };
    InterntourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-interntour',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/interntour/interntour.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>سياحه خارجيه</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="danger">\n    <ion-searchbar placeholder="ابحث" (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="cards-bg">\n\n  <ion-card *ngFor="let InternCardList of InternCardList">\n\n    <img [src]="InternCardList.image" alt="air-bus">\n\n    <ion-card-content>\n      <ion-card-title [innerHTML]="InternCardList.title"></ion-card-title>\n      <p [innerHTML]="InternCardList.description"></p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n          اعجاب\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon ios="ios-document" md="md-document"></ion-icon>\n          احجز الان\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          مشاركه\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/interntour/interntour.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], InterntourPage);
    return InterntourPage;
}());

//# sourceMappingURL=interntour.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportaionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    TransportaionPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "جارى حفظ الحجز",
            duration: 3000
        });
        loader.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TransportaionPage.prototype, "slides", void 0);
    TransportaionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transportaion',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/transportaion/transportaion.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>نقل سياحى</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="tutorial-page">\n\n  <ion-slides pager dir="rtl">\n\n\n    <ion-slide *ngFor="let slidesList of slidesList">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slidesList.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slidesList.title"></h2>\n      <p [innerHTML]="slidesList.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <span>طلب حجز حافلة سياحية</span>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n\n      <ion-list padding>\n        <ion-item>\n          <ion-input required placeholder="اسم الشركة" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="البريد الاليكتروني" type="mail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="رقم الهاتف" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="رقم أخر" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>نوع الحافلة</ion-label>\n          <ion-select required [(ngModel)]="rooms">\n            <ion-option value="h">نوع الحافلة</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>عدد الحافلات</ion-label>\n          <ion-select required [(ngModel)]="rooms">\n            <ion-option value="h">عدد الحافلات</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-list margin-bottom radio-group [(ngModel)]="autoManufacturers">\n          <ion-item>\n            <ion-label stacked> ذهاب فقط </ion-label>\n            <ion-radio value="oneWay"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>ذهاب و عودة</ion-label>\n            <ion-radio value="twoWay"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>وجهات متعددة</ion-label>\n            <ion-radio value="many"></ion-radio>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <span>بيانات رحلة الذهاب</span>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n\n        <ion-item>\n          <ion-label stacked>اختر اليوم</ion-label>\n          <ion-select [(ngModel)]="rooms">\n            <ion-option value="h">اختر اليوم</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label no-margin>التاريخ</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="المدينة من" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="المدينة الى" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="موقع التشغيل" type="text"></ion-input>\n        </ion-item>\n   <ion-item>\n          <ion-input placeholder="ساعة تواجد الحافلة" type="text"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button full  round color="danger">احجز الرحلة</button>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="presentLoading()" color="primary">انهاء</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img src="../../assets/imgs/04.png" class="slide-image"/>\n      <h2 class="slide-title">لقد قمت بالحجز بنجاح شكرا لك</h2>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/transportaion/transportaion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TransportaionPage);
    return TransportaionPage;
}());

//# sourceMappingURL=transportaion.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    TicketsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "جارى حفظ الحجز",
            duration: 3000
        });
        loader.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TicketsPage.prototype, "slides", void 0);
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tickets',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/tickets/tickets.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>تذاكر طيران</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager dir="rtl">\n\n\n    <ion-slide *ngFor="let slidesList of slidesList">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slidesList.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slidesList.title"></h2>\n      <p [innerHTML]="slidesList.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n        <ion-item>\n          <ion-input required placeholder="اسم العميل" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="أدخل بريدك الإلكتروني" type="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input required placeholder="رقم الهاتف" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="رقم اخر" type="tel"></ion-input>\n        </ion-item>\n\n        <ion-list radio-group [(ngModel)]="autoManufacturers">\n        <ion-item>\n          <ion-label stacked> ذهاب فقط </ion-label>\n          <ion-radio value="oneWay"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>ذهاب و عودة</ion-label>\n          <ion-radio value="twoWay"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>وجهات متعددة</ion-label>\n          <ion-radio value="many"></ion-radio>\n        </ion-item>\n        </ion-list>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n        <ion-item>\n          <ion-label no-margin>تاريخ السفر</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="بلد المغادرة" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="مدينة المغادرة" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="بلد الوصول" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="مدينة الوصول" type="text"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n\n        <ion-item>\n          <ion-label  stacked>البالغين (+12)سنة</ion-label>\n          <ion-select required [(ngModel)]="teen">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الاطفال (2-12) سنة</ion-label>\n          <ion-select [(ngModel)]="kids">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الرضع (0-2) سنة</ion-label>\n          <ion-select [(ngModel)]="babes">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الدرجة المطلوبة</ion-label>\n          <ion-select [(ngModel)]="room-kind">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-input required placeholder="الشركة الناقلة" type="text"></ion-input>\n        </ion-item>\n        <button ion-button full  round color="danger">احجز الرحلة</button>\n\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="presentLoading()" color="primary">انهاء</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img src="../../assets/imgs/04.png" class="slide-image"/>\n      <h2 class="slide-title">لقد قمت بالحجز بنجاح شكرا لك</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/tickets/tickets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HotelsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "جارى حفظ الحجز",
            duration: 3000
        });
        loader.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], HotelsPage.prototype, "slides", void 0);
    HotelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hotels',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/hotels/hotels.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>حجوزات فنادق</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager dir="rtl">\n\n\n    <ion-slide *ngFor="let slidesList of slidesList">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slidesList.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slidesList.title"></h2>\n      <p [innerHTML]="slidesList.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar [color]="drak">\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n        <ion-item>\n          <ion-input  placeholder="اسم العميل" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="الهاتف" type="tel"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="أدخل بريدك الإلكتروني" type="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="اسم المدينة" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="اسم الفندق" type="text"></ion-input>\n        </ion-item>\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToSlide()" color="primary">التالى</button>\n        </ion-buttons>\n        <ion-buttons float-right>\n          <button ion-button (click)="slideChanged()" color="primary">الخلف</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-list padding>\n\n        <ion-item>\n          <ion-label stacked>عدد النجوم</ion-label>\n          <ion-select [(ngModel)]="stars">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>عدد الغرف</ion-label>\n          <ion-select [(ngModel)]="rooms">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>عدد الافراد</ion-label>\n          <ion-select [(ngModel)]="count">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>البالغين (+12)سنة</ion-label>\n          <ion-select [(ngModel)]="teen">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الاطفال (2-12) سنة</ion-label>\n          <ion-select [(ngModel)]="kids">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>الرضع (0-2) سنة</ion-label>\n          <ion-select [(ngModel)]="babes">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>نوع الغرفة</ion-label>\n          <ion-select [(ngModel)]="room-kind">\n            <ion-option value="h">Female</ion-option>\n            <ion-option value="l">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>نوع الإطلالة</ion-label>\n          <ion-select [(ngModel)]="apperance">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button full  round color="danger">احجز الرحلة</button>\n\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="presentLoading()" color="primary">انهاء</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img src="../../assets/imgs/04.png" class="slide-image"/>\n      <h2 class="slide-title">لقد قمت بالحجز بنجاح شكرا لك</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/hotels/hotels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HotelsPage);
    return HotelsPage;
}());

//# sourceMappingURL=hotels.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, camera, afDatabase, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.profile = {};
    }
    ProfilePage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object(" profile/" + auth.uid + " ").set(_this.profile)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); });
        });
    };
    ProfilePage.prototype.takePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, image, pictures, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 50,
                            targetWidth: 600,
                            targetHeight: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures = Object(__WEBPACK_IMPORTED_MODULE_6_firebase__["storage"])().ref('pictures/myPhoto');
                        pictures.putString(image, 'data_url');
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/profile/profile.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating> UserName :</ion-label>\n    <ion-input [(ngModel)]="profile.username"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> FirstName :</ion-label>\n    <ion-input [(ngModel)]="profile.firstName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> LastName :</ion-label>\n    <ion-input [(ngModel)]="profile.lastName"></ion-input>\n  </ion-item>\n\n  <button ion-button round (click)="createProfile()"> Create Profile</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallPage = /** @class */ (function () {
    function CallPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallPage');
    };
    CallPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-call',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/call/call.html"*/'\n<ion-header>\n\n\n    <ion-navbar>\n      <button ion-button menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    <ion-title text-center> {{ \'call.title\' | translate }} </ion-title>\n\n      <ion-buttons start>\n        <button ion-button icon-only (click)="backHome()">\n          <ion-icon name="md-arrow-forward"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <google-map></google-map>\n  <ion-row>\n  <ion-col col-12>\n    <ion-card>\n      <ion-card-header> {{ \'call.address.title\' | translate }}  </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <h5> {{ \'call.address.add\' | translate }}  </h5>\n            <ion-icon name="ios-pin" color="danger"></ion-icon>\n            {{ \'call.address.location\' | translate }}\n          </ion-item>\n\n\n          <ion-item>\n            <h5>{{ \'call.contact-us.title\' | translate }}</h5>\n            <ion-icon name="ios-call" color="danger"></ion-icon>\n            {{ \'call.contact-us.number\' | translate }}\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>{{ \'call.address.title\' | translate }} </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <h5> {{ \'call.address.add\' | translate }}  </h5>\n            <ion-icon name="ios-pin" color="danger"></ion-icon>\n            {{ \'call.address.location\' | translate }}\n          </ion-item>\n\n          <ion-item>\n            <h5>{{ \'call.contact-us.title\' | translate }}</h5>\n            <ion-icon name="ios-call" color="danger"></ion-icon>\n            {{ \'call.contact-us.number\' | translate }}\n\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-col>\n</ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/call/call.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CallPage);
    return CallPage;
}());

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(71);
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
 * Generated class for the ForgetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpassPage = /** @class */ (function () {
    function ForgetpassPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    ForgetpassPage.prototype.sign = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'جارى ارسال كلمة السر...',
        });
        loading.present();
        setTimeout(function () {
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    ForgetpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgetpass',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/forgetpass/forgetpass.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <h5> نسيت كلمة السر </h5>\n      <img src="./assets/imgs/favicon.png">\n    </ion-col>\n    <ion-col col-12>\n      <ion-list>\n        <ion-item margin-bottom>\n          <ion-input type="password"  full round dir="rtl" placeholder="الرقم السرى"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" full round dir="rtl" placeholder=" اعادة الرقم السرى"></ion-input>\n        </ion-item>\n\n      </ion-list>\n      <button ion-button full round (click)="sign()">تاكيد</button>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <p text-center color="dark">Copyright &copy; 2018 Air Bus Tours. All Rights Reserved</p>\n</ion-footer>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/forgetpass/forgetpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ForgetpassPage);
    return ForgetpassPage;
}());

//# sourceMappingURL=forgetpass.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import { HomePage } from '../home/home';


var NewuserPage = /** @class */ (function () {
    function NewuserPage(navCtrl, navParams, loadingCtrl, toastCtrl, afAuth, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.user = {};
        this.profile = {};
        this.url = '';
    }
    NewuserPage.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    // signup(position:string) {
    //     let toast = this.toastCtrl.create({
    //         message: 'لقد قمت بانشاء حساب جديد',
    //         duration: 4000,
    //         position: position
    //     });
    //     toast.present(toast);
    //     this.navCtrl.setRoot(SigninPage);
    // }
    NewuserPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toast, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toast = this.toastCtrl.create({
                            message: 'لقد قمت بانشاء حساب جديد',
                            duration: 4000,
                        });
                        toast.present(toast);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        console.error(result);
                        this.afAuth.authState.take(1).subscribe(function (auth) {
                            _this.afDatabase.object(" profile/" + auth.uid + " ").set(_this.profile)
                                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]); });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NewuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-newuser',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/newuser/newuser.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>تسجيل مستخدم جديد</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6 offset-3 >\n      <input type=\'file\' (change)="readUrl($event)">\n      <img [src]="url">\n    </ion-col>\n\n    <ion-col col-12>\n\n      <ion-list>\n        <ion-item margin-bottom>\n          <ion-input type="text" [(ngModel)]="profile.username"  full round dir="rtl" placeholder=" الاسم"></ion-input>\n        </ion-item>\n\n        <ion-item margin-bottom>\n          <ion-input type="email" [(ngModel)]="profile.mail" [(ngModel)]="user.email" full round dir="rtl" placeholder="البريد الالكترونى"></ion-input>\n        </ion-item>\n\n        <ion-item margin-bottom>\n          <ion-input type="tel"  [(ngModel)]="profile.mobile" full round dir="rtl" placeholder=" رقم الهاتف"></ion-input>\n        </ion-item>\n\n        <ion-item margin-bottom>\n          <ion-input type="password" [(ngModel)]="user.password" full round dir="rtl" placeholder="الرقم السرى"></ion-input>\n        </ion-item>\n\n        <ion-item margin-bottom>\n          <ion-input type="password" [(ngModel)]="profile.password" full round dir="rtl" placeholder="اعادة الرقم السرى "></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button full round (click)="register(user)">انشاء حساب جديد</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/newuser/newuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], NewuserPage);
    return NewuserPage;
}());

//# sourceMappingURL=newuser.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
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
    function GalleryPage(navCtrl, navParams, animationService, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.animator = animationService.builder();
    }
    GalleryPage.prototype.animateElem = function () {
        this.animator.setType('pulse').show(this.myElem.nativeElement);
    };
    GalleryPage.prototype.openIt = function () {
        this.photoViewer.show('../assets/imgs/slide2.jpg');
    };
    GalleryPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement'),
        __metadata("design:type", Object)
    ], GalleryPage.prototype, "myElem", void 0);
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gallery',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/gallery/gallery.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title text-center> {{ \'gallery.title\' | translate }}</ion-title>\n\n        <ion-buttons start>\n            <button ion-button icon-only (click)="backHome()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-row>\n        <ion-col col-12 (click)="animateElem()" >\n            <ion-card>\n                <img #myElement src="../../assets/imgs/slide1.jpg"/>\n                <div class="card-title">\n                        {{\'gallery.photos.p1\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n        <ion-col col-6 >\n            <ion-card (click)="openIt()">\n                <img  src="../../assets/imgs/slide2.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p2\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n        <ion-col col-6 (click)="openIt()">\n            <ion-card>\n                <img  src="../../assets/imgs/slide3.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p3\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n        <ion-col col-12 (click)="animation3.start({type: \'pulse\', duration: \'1000\'})">\n            <ion-card>\n                <img  animates #animation3="animates" src="../../assets/imgs/slide4.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p4\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n        <ion-col col-6 (click)="animation4.start({type: \'pulse\', duration: \'1000\'})">\n            <ion-card>\n                <img animates #animation4="animates"  src="../../assets/imgs/slide5.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p5\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n\n        <ion-col col-6 (click)="animation5.start({type: \'pulse\', duration: \'1000\'})">\n            <ion-card>\n                <img animates #animation5="animates" src="../../assets/imgs/slide1.jpg"/>\n                <div class="card-title">\n                    {{\'gallery.photos.p6\'| translate}}\n                </div>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/gallery/gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(98);
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
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/terms/terms.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>{{\'terms.title\' | translate}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row>\n    <ion-col col-12>\n      <p text-justify>\n        {{\'terms.data\' | translate}}\n      </p>\n      <p text-justify>\n        {{\'terms.data\' | translate}}\n      </p>\n      <p text-justify>\n        {{\'terms.data\' | translate}}\n      </p>\n      <p text-justify>\n        {{\'terms.data\' | translate}}\n      </p>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
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
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-videos',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/videos/videos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{\'videos.title\' | translate}}</ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="cards-bg social-cards">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card (tap)="tapEvent($event)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/favicon.png">\n      </ion-avatar>\n      <h2>{{\'videos.userName\' | translate}}</h2>\n      <p>{{\'videos.postDate\'| translate}}</p>\n    </ion-item>\n\n    <video width="100%" height="100%" poster="../../assets/imgs/londonEye.jpeg"  controls="false">\n      <source src="../../assets/imgs/england.webm" type="video/webm">\n    </video>\n\n    <ion-card-content>\n      <p>{{\'videos.description\'| translate}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{tap}} {{\'videos.like\'| translate}}\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          {{tap}} {{\'videos.comment\'| translate}}\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card (tap)="tapEvent($event)">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/avatar.png">\n      </ion-avatar>\n      <h2>{{\'videos.userName\' | translate}}</h2>\n      <p>{{\'videos.postDate\'| translate}}</p>\n    </ion-item>\n\n    <video width="100%" height="100%" poster="../../assets/imgs/londonEye.jpeg" controls="false">\n      <source src="../../assets/imgs/england.webm" type="video/webm">\n    </video>\n\n    <ion-card-content>\n      <p>{{\'videos.description\'| translate}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{tap}} {{\'videos.like\'| translate}}\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          {{tap}} {{\'videos.comment\'| translate}}\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          30yr ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card (tap)="tapEvent($event)">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/favicon.png">\n      </ion-avatar>\n      <h2>{{\'videos.userName\' | translate}}</h2>\n      <p>{{\'videos.postDate\'| translate}}</p>\n    </ion-item>\n\n    <video width="100%" height="100%" poster="../../assets/imgs/londonEye.jpeg"  controls="false">\n      <source src="../../assets/imgs/england.webm" type="video/webm">\n    </video>\n\n    <ion-card-content>\n    <p>{{\'videos.description\'| translate}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{tap}}  {{\'videos.like\'| translate}}\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          {{tap}}   {{\'videos.comment\'| translate}}\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/videos/videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_language__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__haj_omra_haj_omra__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localtour_localtour__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interntour_interntour__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transportaion_transportaion__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tickets_tickets__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hotels_hotels__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomePage = /** @class */ (function () {
    // profileData:FirebaseObjectObservable<Profile>
    function HomePage(navCtrl, navParams, lang, callNumber, afAuth, toast, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lang = lang;
        this.callNumber = callNumber;
        this.afAuth = afAuth;
        this.toast = toast;
        this.popoverCtrl = popoverCtrl;
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Welcome , " + data.email,
                    duration: 3000
                }).present();
                // this.profileData = this.afDatabase.object(`profile/${data.uid}`)
            }
            else {
                _this.toast.create({
                    message: "Wrong Authentication",
                    duration: 3000
                }).present();
            }
        });
    };
    // Function To call Air Bus Number
    HomePage.prototype.call = function () {
        this.callNumber.callNumber("18001010101", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = true;
        this.slides.paginationType = "progress";
        this.slides.dir = "_ltr";
    };
    HomePage.prototype.changeLanguage = function () {
        this.lang.present();
    };
    //page jump
    HomePage.prototype.haj = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__haj_omra_haj_omra__["a" /* HajOmraPage */]);
    };
    HomePage.prototype.localtour = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__localtour_localtour__["a" /* LocaltourPage */]);
    };
    HomePage.prototype.interntour = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__interntour_interntour__["a" /* InterntourPage */]);
    };
    HomePage.prototype.transportaion = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__transportaion_transportaion__["a" /* TransportaionPage */]);
    };
    HomePage.prototype.tickets = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tickets_tickets__["a" /* TicketsPage */]);
    };
    HomePage.prototype.hotels = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__hotels_hotels__["a" /* HotelsPage */]);
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* ProfilePage */]);
        popover.present({
            ev: myEvent
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center> {{ \'main.title\' | translate }} </ion-title>\n\n    <ion-buttons start>\n      <button ion-button icon-only (click)="presentPopover()">\n        <ion-icon name="ios-contact"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons start>\n      <button ion-button icon-only (click)="changeLanguage()">\n        <ion-icon name="md-globe"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row>\n    <ion-slides #slides dir="rtl" [pager]="true" loop="true" onload="startAutoplay()" style="background-color: black">\n      <ion-slide *ngFor="let image of [1,2,3,4,5]">\n        <img height="50%" data-src="../assets/imgs/slide{{image}}.jpg">\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-row id="grid_menu">\n    <ion-col col-4>\n      <ion-card (click)="haj()">\n        <ion-icon   ios="ios-globe" md="md-globe"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.haj\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <ion-card (click)="localtour()">\n        <ion-icon ios="ios-plane" md="md-plane"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.localtour\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <ion-card (click)="interntour()">\n        <ion-icon ios="ios-planet" md="md-planet"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.interntour\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col col-4>\n      <ion-card (click)="transportaion()">\n        <ion-icon ios="ios-bus" md="md-bus"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.transportation\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col col-4>\n      <ion-card (click)="tickets()">\n        <ion-icon ios="ios-paper" md="md-paper"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.tickets\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col col-4>\n      <ion-card (click)="hotels()">\n        <ion-icon  md="md-home"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.hotels\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n    <ion-col col-12 margin-top>\n      <div align-self-center id="news">\n\n        <p>\n          <span>{{ \'main.news\' | translate }}</span>\n          {{ \'main.news-details\' | translate }}\n        </p>\n      </div>\n      <!--<p>user : {{(profileData | async)?.username}}</p>-->\n      <!--<p>user: {{(profileData | async)?.firstName}}</p>-->\n      <!--<p>user: {{(profileData | async)?.lastName}}</p>-->\n    </ion-col>\n\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-fab right bottom>\n    <button ion-fab  (click)="call()" color="light">\n      <ion-icon color="danger" name="md-call"></ion-icon></button>\n  </ion-fab>\n</ion-footer>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_language_language__["a" /* LanguageProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		754,
		16
	],
	"../pages/call/call.module": [
		755,
		15
	],
	"../pages/forgetpass/forgetpass.module": [
		756,
		14
	],
	"../pages/gallery/gallery.module": [
		757,
		13
	],
	"../pages/haj-omra/haj-omra.module": [
		758,
		12
	],
	"../pages/hotels/hotels.module": [
		759,
		11
	],
	"../pages/interntour/interntour.module": [
		760,
		10
	],
	"../pages/localtour/localtour.module": [
		761,
		9
	],
	"../pages/newuser/newuser.module": [
		762,
		8
	],
	"../pages/package-details/package-details.module": [
		763,
		7
	],
	"../pages/profile/profile.module": [
		764,
		6
	],
	"../pages/settings/settings.module": [
		765,
		5
	],
	"../pages/signin/signin.module": [
		766,
		4
	],
	"../pages/terms/terms.module": [
		767,
		3
	],
	"../pages/tickets/tickets.module": [
		768,
		2
	],
	"../pages/transportaion/transportaion.module": [
		769,
		1
	],
	"../pages/videos/videos.module": [
		770,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_images_images__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_language_language__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_newuser_newuser__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_css_animator__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__firebase_credentials__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_forgetpass_forgetpass__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_haj_omra_haj_omra__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_localtour_localtour__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_interntour_interntour__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_transportaion_transportaion__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_tickets_tickets__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_hotels_hotels__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ionic2_rating__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_videos_videos__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_gallery_gallery__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_call_call__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_settings_settings__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_google_map_google_map__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_terms_terms__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_profile_profile__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_package_details_package_details__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// Fire-Base




//End - Fire-Base




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newuser_newuser__["a" /* NewuserPage */],
                __WEBPACK_IMPORTED_MODULE_17_css_animator__["AnimatesDirective"],
                __WEBPACK_IMPORTED_MODULE_40__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_forgetpass_forgetpass__["a" /* ForgetpassPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_haj_omra_haj_omra__["a" /* HajOmraPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_package_details_package_details__["a" /* PackageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_localtour_localtour__["a" /* LocaltourPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_interntour_interntour__["a" /* InterntourPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_transportaion_transportaion__["a" /* TransportaionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_tickets_tickets__["a" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_call_call__["a" /* CallPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_38__components_google_map_google_map__["a" /* GoogleMapComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_32_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {
                    preloadModules: true,
                    platforms: {
                        ios: {
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
                            tabsPlacement: 'bottom',
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/call/call.module#CallPageModule', name: 'CallPage', segment: 'call', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgetpass/forgetpass.module#ForgetpassPageModule', name: 'ForgetpassPage', segment: 'forgetpass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/haj-omra/haj-omra.module#HajOmraPageModule', name: 'HajOmraPage', segment: 'haj-omra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotels/hotels.module#HotelsPageModule', name: 'HotelsPage', segment: 'hotels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interntour/interntour.module#InterntourPageModule', name: 'InterntourPage', segment: 'interntour', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localtour/localtour.module#LocaltourPageModule', name: 'LocaltourPage', segment: 'localtour', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/package-details/package-details.module#PackageDetailsPageModule', name: 'PackageDetailsPage', segment: 'package-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tickets/tickets.module#TicketsPageModule', name: 'TicketsPage', segment: 'tickets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transportaion/transportaion.module#TransportaionPageModule', name: 'TransportaionPage', segment: 'transportaion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //initialize fire base module
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_18__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: function (http) {
                            return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
                        },
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newuser_newuser__["a" /* NewuserPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_forgetpass_forgetpass__["a" /* ForgetpassPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_haj_omra_haj_omra__["a" /* HajOmraPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_package_details_package_details__["a" /* PackageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_localtour_localtour__["a" /* LocaltourPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_interntour_interntour__["a" /* InterntourPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_transportaion_transportaion__["a" /* TransportaionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_tickets_tickets__["a" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_call_call__["a" /* CallPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_terms_terms__["a" /* TermsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_language_language__["a" /* LanguageProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_images_images__["a" /* ImagesProvider */],
                __WEBPACK_IMPORTED_MODULE_17_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__["a" /* PhotoViewer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgetpass_forgetpass__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newuser_newuser__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// import {ProfilePage} from "../profile/profile";
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, loadingCtrl, modalCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.user = {};
    }
    SigninPage.prototype.sign = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'جارى تحميل تسجيل الدخول',
            showBackdrop: true
        });
        loading.present();
        setTimeout(function () {
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SigninPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                    if (result) {
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    SigninPage.prototype.faceLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var face;
            return __generator(this, function (_a) {
                try {
                    face = this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider());
                    if (face) {
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    SigninPage.prototype.newuser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newuser_newuser__["a" /* NewuserPage */]);
    };
    SigninPage.prototype.forget = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgetpass_forgetpass__["a" /* ForgetpassPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/signin/signin.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <h5>تسجيل الدخول</h5>\n      <img src="./assets/imgs/favicon.png">\n    </ion-col>\n    <ion-col col-12>\n      <ion-list>\n        <ion-item margin-bottom>\n          <ion-input type="email" [(ngModel)]="user.email"  full round dir="rtl" placeholder="البريد الالكترونى"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" [(ngModel)]="user.password" full round dir="rtl" placeholder="الرقم السرى"></ion-input>\n        </ion-item>\n\n      </ion-list>\n      <p text-right (click)="forget()"><a [href]=""> نسيت كلمة السر الخاصه بك ؟</a></p>\n      <button ion-button full round (click)="login(user)">دخول</button>\n      <p class="social_icons">\n        <span (click)="faceLogin()"><ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon></span>\n        <span><ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon></span>\n        <span><ion-icon ios="logo-google" md="logo-google"></ion-icon></span>\n      </p>\n      <p text-center><a [href]="" (click)="newuser()"> تسجيل مستخدم جديد</a></p>\n      <button ion-button round color="dark" (click)="sign()">الدخول بدون تسجيل</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <p text-center color="dark">Copyright &copy; 2018 Air Bus Tours. All Rights Reserved</p>\n</ion-footer>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagesProvider = /** @class */ (function () {
    function ImagesProvider(http, transfer) {
        this.http = http;
        this.transfer = transfer;
        this.apiURL = 'http://localhost:3000/';
    }
    ImagesProvider.prototype.getImages = function () {
        return this.http.get(this.apiURL + 'images').map(function (res) { return res.json(); });
    };
    ImagesProvider.prototype.deleteImage = function (img) {
        return this.http.delete(this.apiURL + 'images/' + img._id);
    };
    ImagesProvider.prototype.uploadImage = function (img, desc) {
        // Destination URL
        var url = this.apiURL + 'images';
        // File for Upload
        var targetPath = img;
        var options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            params: { 'desc': desc }
        };
        var fileTransfer = this.transfer.create();
        // Use the FileTransfer to upload the image
        return fileTransfer.upload(targetPath, url, options);
    };
    ImagesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], ImagesProvider);
    return ImagesProvider;
}());

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_language_language__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gallery_gallery__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_videos_videos__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_call_call__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate, camera, menuCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.camera = camera;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        this.translate.setDefaultLanguage();
        this.initializeApp();
        this.pages = [
            { title: 'Page-A', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: "ios-home" },
            { title: 'Page-B', component: __WEBPACK_IMPORTED_MODULE_8__pages_gallery_gallery__["a" /* GalleryPage */], icon: "md-images" },
            { title: 'Page-C', component: __WEBPACK_IMPORTED_MODULE_9__pages_videos_videos__["a" /* VideosPage */], icon: "md-videocam" },
            { title: 'Page-D', component: __WEBPACK_IMPORTED_MODULE_10__pages_call_call__["a" /* CallPage */], icon: "logo-whatsapp" },
            { title: 'Page-E', component: __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__["a" /* AboutusPage */], icon: "md-information-circle" },
            { title: 'Page-F', component: __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */], icon: "md-cog" },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    //To Logout From the App
    MyApp.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/app/app.html"*/'<ion-menu [content]="content" side="right" type="push">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title text-center> {{ \'toolbar.title\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-avatar text-center class="avatar" >\n      <img width="30%" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png">\n    </ion-avatar>\n\n    <button id="signout"  ion-button center round (click)="signin()" color="danger">{{\'buttons.singout\' | translate}}</button>\n\n    <ion-list   id="list_color">\n      <button  menuClose icon-right  ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" color="danger"></ion-icon>\n        {{p.title | translate}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content  swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_language_language__["a" /* LanguageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyAmb9fQxuy1EGejZFz1Sm79w4hVRHmDOTc",
    authDomain: "airbus-c1ed6.firebaseapp.com",
    databaseURL: "https://airbus-c1ed6.firebaseio.com",
    projectId: "airbus-c1ed6",
    storageBucket: "airbus-c1ed6.appspot.com",
    messagingSenderId: "973973304260"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMapComponent.prototype.initMap = function () {
        var coords = new google.maps.LatLng(25, 80);
        var mapOptions = {
            center: coords,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: coords
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("map"),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "mapElement", void 0);
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'google-map',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/components/google-map/google-map.html"*/'<div id="map" #map> </div>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/components/google-map/google-map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageProvider = /** @class */ (function () {
    function LanguageProvider(translateService, actionSheetCtrl) {
        this.translateService = translateService;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    LanguageProvider.prototype.set = function (lang) {
        this.translateService.setDefaultLang(lang);
    };
    LanguageProvider.prototype.setDefaultLanguage = function () {
        this.translateService.setDefaultLang('ar');
    };
    LanguageProvider.prototype.present = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'أختر اللغة',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'العربية',
                    handler: function () {
                        _this.set('ar');
                    }
                },
                {
                    text: 'English',
                    handler: function () {
                        _this.set('en');
                    }
                }
            ]
        }).present();
    };
    LanguageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */]])
    ], LanguageProvider);
    return LanguageProvider;
}());

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_language__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_terms__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, lang) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lang = lang;
    }
    SettingsPage.prototype.changeLanguage = function () {
        this.lang.present();
    };
    SettingsPage.prototype.terms = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__terms_terms__["a" /* TermsPage */]);
    };
    SettingsPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>{{\'settings.title\' | translate}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="backHome()">\n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row>\n    <ion-col col-12>\n      <ion-list>\n        <ion-item-group>\n          <button ion-item (click)="changeLanguage()" >\n            <ion-icon  name="ios-switch" item-start color="primary"></ion-icon>\n            <ion-label>{{\'settings.language\' | translate}}</ion-label>\n            <ion-note item-end>{{\'settings.data\' | translate}}</ion-note>\n          </button>\n          <button ion-item (click)="terms()">\n            <ion-icon name="ios-book-outline" item-start color="primary"></ion-icon>\n            <ion-label>{{\'settings.terms\' | translate}}</ion-label>\n          </button>\n        </ion-item-group>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_language_language__["a" /* LanguageProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map