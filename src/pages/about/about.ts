import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    constructor(public navCtrl: NavController) {}

    // Lifecycle
    // ionViewCanEnter() { alert('Can Enter') }
    // ionViewDidLoad() { alert('Did Load') }
    // ionViewWillEnter() { alert('Will Enter') }
    // ionViewDidEnter() { alert('Did Enter') }
    // ionViewWillLeave() { alert('Will Leave') }
    // ionViewDidLeave() { alert('Did Leave') }
}
