import {Parent, Attribute, EventEmitter, ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from "angular2/angular2";
import {SomeParent} from "someParent";
import {Notepad} from "directives";

@Component({
    selector: 'gift',
    events: ['open'],
    properties: {
      'updateparent':'parentfunc'
    }
})
@View({
    templateUrl: 'gift.html',
    directives: [Notepad]
})
class Gift{
  open = new EventEmitter();
  myname: String;

  constructor(@Parent() parent:SomeParent, @Attribute('giver') theGiver) {
    // console.log(parent, theGiver);
    console.log(this);
    // this.updateparent(25);
  }

  onClick() {
    var val = this.updateparent(35)
    console.log(val);
    // console.log(this.myname);
    this.open.next();
  }
}

export {Gift};