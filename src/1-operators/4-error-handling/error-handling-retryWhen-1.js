// https://www.learnrxjs.io/operators/error_handling/retrywhen.html

import { interval, timer } from 'rxjs'
import { retryWhen, map, tap, delayWhen } from 'rxjs/operators'

// emit value every 1s
const source = interval(1000)
const example = source.pipe(
  map(val => {
    if (val > 5) {
      // error will be picked up by retryWhen
      throw val
    }
    return val
  }),
  retryWhen(errors =>
    errors.pipe(
      // log error message
      tap(val => console.log(`Value ${val} was too high!`)),
      // restart in 5 seconds
      delayWhen(val => timer(val * 1000))
    )
  )
)
/*
  output:
  0
  1
  2
  3
  4
  5
  "Value 6 was too high!"
  --Wait 5 seconds then repeat
*/
example.subscribe(val => console.log(val))
