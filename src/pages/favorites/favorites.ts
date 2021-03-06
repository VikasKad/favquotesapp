import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../services/quotes";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes:Quote;
  constructor(
    private quoteService:QuotesService){

  }
  ionViewWillEnter(){
    this.quotes=this.quoteService.getFavQuotes()
  }

}
