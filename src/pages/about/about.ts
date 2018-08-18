import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
    bestSellerProducts
    constructor(public navCtrl: NavController, private _products: ProductProvider) { }

    ionViewDidLoad() {
        this._products.getProducts().subscribe(
            res => {
                this.bestSellerProducts = res.filter(x => x.bestSeller == true)
            }
        )
    }

}
