import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    allProducts

    constructor(public navCtrl: NavController, private _products: ProductProvider) { }

    ionViewDidLoad() {
        this._products.getProducts().subscribe(
            res => this.allProducts = res
        )
    }

    goToProductDetailPage(product) {
        this.navCtrl.push(ProductDetailPage, { productDetails: product })
    }
}
