import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-product-detail',
    templateUrl: 'product-detail.html',
})

export class ProductDetailPage {
    productDetails
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.productDetails = this.navParams.get('productDetails')
    }


}