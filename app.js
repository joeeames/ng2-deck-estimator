import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from "angular2/angular2";
import {SomeParent} from "someParent";
import {JobInfo} from "jobinfo";
import {DeckingPrices} from "deckingprices";


@Component({
    selector: 'vegas-app'
})
@View({
    template: `
        <div>
            <h1>Hello world</h1>
            <some-parent>
            
            </some-parent>
            <job-info></job-info>
            <decking-prices></decking-prices>
        </div>
    `,
    directives: [SomeParent, JobInfo, DeckingPrices]
})
class VegasApp{
  constructor() {
  }
  onOpen() {
    console.log('opened in app')
  }
}

bootstrap(VegasApp);