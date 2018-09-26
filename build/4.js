webpackJsonp([4],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuotePageModule", function() { return CreateQuotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_quote__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateQuotePageModule = (function () {
    function CreateQuotePageModule() {
    }
    CreateQuotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_quote__["a" /* CreateQuotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_quote__["a" /* CreateQuotePage */]),
            ],
        })
    ], CreateQuotePageModule);
    return CreateQuotePageModule;
}());

//# sourceMappingURL=create-quote.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_quotes_quotes__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(201);
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
 * Generated class for the CreateQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateQuotePage = (function () {
    function CreateQuotePage(navCtrl, navParams, quotesProvider, camera, fileTransfer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quotesProvider = quotesProvider;
        this.camera = camera;
        this.fileTransfer = fileTransfer;
        this.hideImage = true;
    }
    CreateQuotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateQuotePage');
    };
    CreateQuotePage.prototype.onAddQuote = function () {
        this.quotesProvider.postQuote(this.content, this.author).subscribe(function (data) {
            console.log(data);
        });
    };
    CreateQuotePage.prototype.getPhoto = function () {
        var _this = this;
        var options = { quality: 50, destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: this.camera.EncodingType.PNG,
            correctOrientation: true,
            targetHeight: 512,
            targetWidth: 512
        };
        this.camera.getPicture(options).then(function (ImageData) {
            _this.imgData = ImageData;
            _this.imgUrl = "data:image/png;base64," + ImageData;
            _this.hideImage = false;
        });
    };
    CreateQuotePage.prototype.uploadPhoto = function () {
        var t = this.fileTransfer.create();
        t.upload(this.imgUrl, "http://fasomatin.com/wp-json/wp/v2/media", {
            headers: {
                "Authorization": "Basic " + btoa("username:password"),
                "content-disposition": "attachement; filename=\'samarthadavod.png\'"
            }
        }).then(function (res) {
            alert(JSON.stringify(res));
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    CreateQuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-quote',template:/*ion-inline-start:"C:\DEV\Fasomatin\fasomatin\src\pages\create-quote\create-quote.html"*/'<!--\n  Generated template for the CreateQuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Quote</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="content" [(ngModel)]="content"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="author" [(ngModel)]="author"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button block (click)="getPhoto()">Click Photo</button>\n<img [src]="imageUrl" [hidden]="hideImage" style="width:100%; height:auto"/>\n      <button ion-button block (click)="uploadPhoto()">Upload Photo</button>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block (click)="onAddQuote()">Add Quote</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\DEV\Fasomatin\fasomatin\src\pages\create-quote\create-quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_quotes_quotes__["a" /* QuotesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], CreateQuotePage);
    return CreateQuotePage;
}());

//# sourceMappingURL=create-quote.js.map

/***/ })

});
//# sourceMappingURL=4.js.map