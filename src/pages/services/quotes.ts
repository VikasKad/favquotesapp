import {Quote} from "../../data/quote.interface";

export class QuotesService {
  private favQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favQuotes.push(quote);
    console.log("added new quote", this.favQuotes);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favQuotes.findIndex((quoteEl: Quote) =>{
        return quoteEl.id == quote.id;
    });
    this.favQuotes.slice(position, 1);
  }

  getFavQuotes() {
    return this.favQuotes.slice();
  }
}
