import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: object;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.quoteGroup=this.navParams.data;
  }
  // ionViewDidLoad(){
  //
  //
  //   console.log("data", this.navParams.data);
  // }
}
