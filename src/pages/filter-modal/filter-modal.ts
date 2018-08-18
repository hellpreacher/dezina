import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-filter-modal',
    templateUrl: 'filter-modal.html',
})
export class FilterModalPage {
    maleSelected:boolean
    femaleSelected: boolean
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
        this.maleSelected = this.navParams.get('maleSelected')
        this.femaleSelected = this.navParams.get('femaleSelected')
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FilterModalPage');
    }

    closeModal() {
        let filterState = {
            femaleSelected: this.femaleSelected,
            maleSelected: this.maleSelected
        }
        
        this.viewCtrl.dismiss(filterState)
    }
}
