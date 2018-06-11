import { of, from } from 'rxjs'
import { mergeMap, catchError } from 'rxjs/operators'

// example promise that will resolve or reject based on input
const myPromise = willReject => {
  return new Promise((resolve, reject) => {
    if (willReject) {
      reject('Rejected!')
    }
    resolve('Resolved!')
  })
}
// emit true, then false
const source = of(true, false)
const example = source.pipe(
  mergeMap(val =>
    from(myPromise(val)).pipe(
      // catch and gracefully handle rejections
      catchError(error => of(`Error: ${error}`))
    )
  )
)
// output: 'Error: Rejected!', 'Resolved!'
example.subscribe(val => console.log(val))
