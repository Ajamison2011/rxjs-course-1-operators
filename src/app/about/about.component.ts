import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, interval, merge, noop, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    
  }

}


//Concat Example
// const source1$ = of(1,2,3);
   //const source1$ = interval(1000);
    

//     const source2$ = of(4,5,6);

//     const source3$ = of(7,8,9);

//     const results$ = concat(source1$,source2$,source3$)
//     .subscribe(
//       res => console.log(res)
//       );
    

//Merge Example
// const interval1$ = interval(1000);
// const interval2$ = interval1$.pipe(map(res => res * 10));
// const result$ = merge(interval1$,interval2$).subscribe(console.log);
