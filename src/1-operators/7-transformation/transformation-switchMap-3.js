// https://www.learnrxjs.io/operators/transformation/switchmap.html

import { interval, timer } from 'rxjs'
import { switchMap } from 'rxjs/operators'

// emit immediately, then every 5s
const source = timer(0, 5000)
// switch to new inner observable when source emits, invoke project function and emit values
const example = source.pipe(
  switchMap(
    _ => interval(2000),
    (outerValue, innerValue, outerIndex, innerIndex) => ({
      outerValue,
      innerValue,
      outerIndex,
      innerIndex
    })
  )
)
/*
    Output:
    {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
    {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
    {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
    {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
*/
const subscribe = example.subscribe(val => console.log(val))
