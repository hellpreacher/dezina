import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ProductDetailPage } from '../product-detail/product-detail';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    allProducts

    constructor(public navCtrl: NavController, private modalCtrl: ModalController, private _products: ProductProvider) { }

    ionViewDidLoad() {
        this._products.getProducts().subscribe(
            res => this.allProducts = res
        )
    }

    openFilterModal() {
        let modal = this.modalCtrl.create(FilterModalPage).present()
    }

    goToProductDetailPage(product) {
        this.navCtrl.push(ProductDetailPage, { productDetails: product })
    }
}
