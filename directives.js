import { ComponentAnnotation as Component, Directive, ViewAnnotation as View, bootstrap} from "angular2/angular2";
import {Inject, bind} from "angular2/di"
// @Directive({
//   selector: 'input',
//   hostProperties: {
//     'value': 'value'
//   },
//   hostListeners: {
//     'change': 'onChange($event)'
//   }
// })
// class InputDirective {
//   value:string;
//   onChange(event:Event) {
//       console.log('the event', event);
//       console.log(this.value);
//       // this.value = 'changed';
//       var that = this;
//       setTimeout(function() {
//         that.value = 'changed';
//       }, 1000)
//   }
// }

// export {InputDirective}

class NotepadData {
  constructor() {
    this.name = 'joe'
  }
}

var myData = {
  thing:'mydata'
}

function someFactory() {
  console.log(3);
}

@Component({
  selector: 'notepad',
  properties: {
    'note': 'note'
  },
  injectables: [
    bind(NotepadData).toClass(NotepadData),
    bind('myData').toValue(myData),
    bind(someFactory).toFactory(someFactory)

  ]
})
@View({
  template: '<h2>header: {{notepadHeader}}</h2>'
})
class Notepad {
  constructor(@Inject(NotepadData) notepadData:NotepadData, @Inject('myData') myData, 
      @Inject(someFactory) myFactory) {
    console.log(notepadData, myData);

  }
}

export {Notepad}