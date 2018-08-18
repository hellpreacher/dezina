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
    maleSelected:boolean = true
    femaleSelected: boolean = true
    allProducts
    constructor(public navCtrl: NavController, private modalCtrl: ModalController, private _products: ProductProvider) { }

    ionViewDidLoad() {
        this._products.getProducts().subscribe(
            res => this.allProducts = res
        )
    }

    openFilterModal() {
        let filterStateMainPage = {
            maleSelected: this.maleSelected,
            femaleSelected: this.femaleSelected
        }
        let modal = this.modalCtrl.create(FilterModalPage, filterStateMainPage)

        modal.onDidDismiss((filterState) => {
            this.maleSelected = filterState.maleSelected
            this.femaleSelected = filterState.femaleSelected
            
            this._products.getProducts().subscribe(
                res => {
                    let products = res
                    
                    if(filterState.maleSelected && filterState.femaleSelected) {
                        this.allProducts = products
                    } else if (!filterState.maleSelected && !filterState.femaleSelected) {
                        this.allProducts = []
                    } else if (filterState.maleSelected && !filterState.femaleSelected) {
                        this.allProducts = res.filter(x => x.gender.toLowerCase() !== 'female')
                    } else if (!filterState.maleSelected && filterState.femaleSelected){
                        this.allProducts = res.filter(x => x.gender.toLowerCase() !== 'male')
                    }
                }
            )
        })

        modal.present()
        
    }

    goToProductDetailPage(product) {
        this.navCtrl.push(ProductDetailPage, { productDetails: product })
    }
}
