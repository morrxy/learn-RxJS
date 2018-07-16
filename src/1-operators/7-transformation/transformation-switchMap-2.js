// https://www.learnrxjs.io/operators/transformation/switchmap.html

import { interval, fromEvent } from 'rxjs'
import { switchMap, mapTo } from 'rxjs/operators'

// emit every click
const source = fromEvent(document, 'click')
// if another click comes within 3s, message will not be emitted
const example = source.pipe(
  switchMap(val => interval(3000).pipe(mapTo('Hello, I made it!')))
)
// (click)...3s...'Hello I made it!'...(click)...2s(click)...
const subscribe = example.subscribe(val => console.log(val))
