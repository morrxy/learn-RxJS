// https://www.learnrxjs.io/operators/error_handling/catch.html

import { of, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

// emit error
const source = throwError('This is an error!')
// gracefully handle error, returning observable with error message
const example = source.pipe(catchError(val => of(`I caught: ${val}`)))
// output: 'I caught: This is an error'
example.subscribe(val => console.log(val))
