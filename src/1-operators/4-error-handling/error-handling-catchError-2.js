// https://www.learnrxjs.io/operators/error_handling/catch.html

import { of, timer, from } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'

// create promise that immediately rejects
const myBadPromise = () => new Promise((resolve, reject) => reject('Rejected!'))
// emit single value after 1 second
const source = timer(1000)
// catch rejected promise, returning observable containing error message
const example = source.pipe(
  mergeMap(_ =>
    from(myBadPromise()).pipe(
      catchError(error => of(`Bad Promise: ${error}`))
    )
  )
)
// output: 'Bad Promise: Rejected'
example.subscribe(val => console.log(val))
