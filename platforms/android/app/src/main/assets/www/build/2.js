webpackJsonp([2],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsPageModule", function() { return PackageDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package_details__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__ = __webpack_require__(741);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PackageDetailsPageModule = /** @class */ (function () {
    function PackageDetailsPageModule() {
    }
    PackageDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__package_details__["a" /* PackageDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__package_details__["a" /* PackageDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: function (http) {
                            return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
                        },
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
        })
    ], PackageDetailsPageModule);
    return PackageDetailsPageModule;
}());

//# sourceMappingURL=package-details.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(742);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(740);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(740);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDetailsPage; });
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


var PackageDetailsPage = /** @class */ (function () {
    function PackageDetailsPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.Hotels_maka = [
            {
                title: "فندق مكه",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
                location: "../../assets/imgs/omrah-modal.jpg"
            }
        ];
        this.Hotels_madina = [
            {
                title: "فندق المدينه",
                description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
                image: "../../assets/imgs/omrah-modal.jpg",
                location: "../../assets/imgs/omrah-modal.jpg"
            }
        ];
        this.reserve = "partA";
        this.testRadioOpen = false;
    }
    PackageDetailsPage.prototype.HotelsMaka = function () {
        this.navCtrl.push('MakaHotelPage');
    };
    PackageDetailsPage.prototype.HotelsMadina = function () {
        this.navCtrl.push('MadinaHotelPage');
    };
    PackageDetailsPage.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = false;
        this.slides.paginationType = "progress";
        this.slides.dir = "_ltr";
    };
    PackageDetailsPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('بيانات الحجز');
        alert.addInput({
            type: 'text',
            value: 'الاسم :',
        });
        alert.addInput({
            type: 'tel',
            value: 'الهاتف :'
        });
        alert.addInput({
            type: 'mail',
            value: 'البريد الالكترونى :'
        });
        alert.addButton({
            text: 'أحجز',
            cssClass: 'ion-button danger',
            handler: function (data) {
                _this.testRadioResult = data;
                var toast = _this.toastCtrl.create({
                    message: 'لقد قمت بالحجز شكرا',
                    duration: 6000,
                    position: 'top'
                });
                // this.navCtrl.push('HomePage');
                toast.present(toast);
            }
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], PackageDetailsPage.prototype, "slides", void 0);
    PackageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-package-details',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/package-details/package-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{\'packageDetail.title\' | translate}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment  color="danger"  [(ngModel)]="reserve">\n      <ion-segment-button   value="partA">\n        {{\'packageDetail.tabs.1\'| translate}}\n      </ion-segment-button>\n      <ion-segment-button   value="partB">\n        {{\'packageDetail.tabs.2\'| translate}}\n      </ion-segment-button>\n      <ion-segment-button   value="partC">\n        {{\'packageDetail.tabs.3\'| translate}}\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <div class="info_bar">\n    <p>\n      <span>{{\'packageDetail.trip.name\'| translate}}</span>\n      <span>{{\'packageDetail.trip.place\'| translate}}</span>\n      <span>{{\'packageDetail.trip.cost\'| translate}}</span>\n    </p>\n    <rating [(ngModel)]="rate" emptyStarIconName="star" max="5" readOnly="true" (ngModelChange)="changeRating($event)" halfStarIconName="star"></rating>\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="reserve">\n\n    <div *ngSwitchCase="\'partA\'">\n\n      <ion-slides #slides dir="rtl" [pager]="true" loop="true" onload="startAutoplay()" style="background-color: black">\n        <ion-slide *ngFor="let image of [1,2,3,4,5]">\n          <img height="50%" data-src="../assets/imgs/slide{{image}}.jpg">\n        </ion-slide>\n      </ion-slides>\n\n      <section padding>\n        <p>{{\'packageDetail.trip.date\'| translate}}</p>\n\n        <h5>{{\'packageDetail.trip.title-desc\'| translate}}</h5>\n\n        <article margin-bottom>\n          {{\'packageDetail.trip.details\'| translate}}\n          {{\'packageDetail.trip.details\'| translate}}\n        </article>\n      </section>\n\n     </div>\n\n    <div *ngSwitchCase="\'partB\'">\n\n      <ion-list radio-group>\n        <ion-item>\n          <ion-label>\n          <h5>اليوم الاول</h5>\n          <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left  value="cord"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الثانى</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="duesenberg"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الثلاث</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="hudson"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الرابع</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="packard"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h5>اليوم الخامس</h5>\n            <p>{{\'packageDetail.trip.details\'| translate}}</p>\n          </ion-label>\n          <ion-radio item-left value="studebaker"></ion-radio>\n        </ion-item>\n\n      </ion-list>\n    </div>\n\n\n    <div *ngSwitchCase="\'partC\'">\n\n      <ion-card  *ngFor="let Hotels_maka of Hotels_maka; let i = index;" >\n\n        <img (click)="HotelsMaka()" [src]="Hotels_maka.image" alt="air-bus">\n\n        <ion-card-content>\n          <ion-card-title [innerHTML]="Hotels_maka.title"></ion-card-title>\n          <p [innerHTML]="Hotels_maka.description"></p>\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n\n          <ion-col text-center>\n            <button ion-button block full (click)="HotelsMaka()" color="danger" icon-start>\n              <ion-icon ios="ios-document" md="md-document"></ion-icon>\n              اقراء المزيد\n            </button>\n          </ion-col>\n\n\n        </ion-row>\n\n      </ion-card>\n\n      <ion-card  *ngFor="let Hotels_madina of Hotels_madina; let i = index;" >\n\n        <img  (click)="HotelsMadina()" [src]="Hotels_madina.image" alt="air-bus">\n\n        <ion-card-content>\n          <ion-card-title [innerHTML]="Hotels_madina.title"></ion-card-title>\n          <p [innerHTML]="Hotels_madina.description"></p>\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n          <ion-col text-center>\n            <button ion-button  block full (click)="HotelsMadina()" color="danger" icon-start>\n              <ion-icon ios="ios-document" md="md-document"></ion-icon>\n              اقراء المزيد\n            </button>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <button margin-top ion-button  round block (click)="doRadio()" color="danger">أحجز الان </button>\n</ion-footer>\n'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/package-details/package-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], PackageDetailsPage);
    return PackageDetailsPage;
}());

//# sourceMappingURL=package-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map