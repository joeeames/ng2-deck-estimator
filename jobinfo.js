import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, ElementRef} from "angular2/angular2";
import {Inject, bind} from "angular2/di"
import {jobData} from "services/jobData"
// import {InputDirective} from 'directives'

var jobData2 = {b:3}

@Component({
    selector: 'job-info',
    // injectables: [
      // bind('jobData').toValue(jobData)
    // ]
})
@View({
    templateUrl: 'jobinfo.html',
    // directives: [InputDirective]
})
class JobInfo{
  // constructor(@Inject('jobData') jobData/*, /*@Inject(ElementRef) elementRef:ElementRef*/) {
  //   this.length = 10;
  //   this.width = 10;
  //   this.waste = 10;
  //   console.log(jobData);
  //   console.log(ElementRef);
  //   // console.log('domElement', elementRef.domElement);
  //   // console.dir(elementRef);
  //   // console.log(jobData);
  // }
  // updateLength(newVal) {
  //   this.length = newVal;
  // }
  // updateWidth(newVal) {
  //   this.width = newVal;
  // }
  // updateWaste(newVal) {
  //   this.waste = newVal;
  // }
  // area() {
  //   var trueArea = this.length * this.width;
  //   return trueArea + trueArea * this.waste / 100;
  // }
  // perimiter() {
  //   var truePerimiter = this.length * 2 + this.width * 2;
  //   return truePerimiter + truePerimiter * (this.waste / 100);
  // }

}

export {JobInfo}