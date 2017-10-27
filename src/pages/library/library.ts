import { Component, OnInit } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements onInit {
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];
  quotesPage: QuotesPage;
  constructor(public navCtrl: NavController) {

  };
  goToPage(data:object) {
    console.log("data", data);
    this.navCtrl.push(QuotesPage,data);
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
