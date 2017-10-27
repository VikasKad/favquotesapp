import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../services/quotes";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements onInit {
  quoteGroup: object;

  constructor(private navParams: NavParams,
              private alertMsg: AlertController,
              private quoteService:QuotesService) {

    /*this to pass direct via constuctor*/
    // this.quoteGroup=this.navParams.data;

  }

  ngOnInit() {
    /*from with nginit*/
    this.quoteGroup = this.navParams.data;

  }

  ionViewDidLoad() {
    /*add alvis operator(?) to use this approach*/
    this.quoteGroup = this.navParams.data;

  }

  onAddToFav(selectedQuote: Quote) {
    const alert = this.alertMsg.create({
      title: "Add Quote",
      subTitle: "Are you sure?",
      message: "Are you wants to add the quotes?",
      buttons: [{
        text: "Yes Go ahead",
        handler: () => {
          this.quoteService.addQuoteToFavorites(selectedQuote);
        }
      },
        {
          text: "No I changed my mind",
          role:"cancel",
          handler: () => {
            console.log('cancelled');
          }
        }]
    });
    alert.present();
  }
}
