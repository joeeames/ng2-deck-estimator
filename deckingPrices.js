import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from "angular2/angular2";

@Component({
    selector: 'decking-prices'
})
@View({
    templateUrl: 'deckingPrices.html',
})
class DeckingPrices{
  constructor() {
    this.selectCost = 1.95;
    this.selectMargin = 0.08;
  }
  selectCostPSF() {
    return (this.selectCost / 0.4583);
  }
  selectSalePrice() {
    return (this.selectCostPSF() / (1 - this.selectMargin))
  }
  selectDeckingExtTotal() {
    // return (area() * this.selectSalePrice())
  }

}

export {DeckingPrices}