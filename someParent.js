import {Parent, EventEmitter, ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from "angular2/angular2";
import {Gift} from 'gift'

@Component({
    selector: 'some-parent',
})
@View({
    templateUrl: 'someParent.html',
    directives: [Gift]
})
class SomeParent{
  constructor() {
    this.name = 'Joe'
  }
  id = 3;

  dostuff() {
    console.log('doing stuff')
  }

  parentfunc(val) {
    console.log(val);
    return 5;
  }

  onOpen() {
    console.log('opened in app');
  }

}

export {SomeParent};