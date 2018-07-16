// https://www.learnrxjs.io/operators/transformation/switchmap.html

import { interval, timer } from 'rxjs'
import { switchMap } from 'rxjs/operators'

// emit immediately, then every 5s
const source = timer(0, 5000)
// switch to new inner observable when source emits, emit items that are emitted
const example = source.pipe(switchMap(() => interval(500)))
// output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
const subscribe = example.subscribe(val => console.log(val))
