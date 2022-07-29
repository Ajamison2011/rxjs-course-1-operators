import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, interval, noop, Observable, of } from 'rxjs';
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

    const source1$ = interval(1000);

    const source2$ = of(4,5,6);

    const source3$ = of(7,8,9);

    const results$ = concat(source1$,source2$,source3$)
    .subscribe(
      res => console.log(res)
      );
    
  }

}


