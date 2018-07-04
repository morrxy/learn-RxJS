// https://www.learnrxjs.io/operators/filtering/distinctuntilchanged.html

import { from } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

// only output distinct values, based on the last emitted value
const myArrayWithDuplicatesInARow = from([1, 1, 2, 2, 3, 1, 2, 3])

myArrayWithDuplicatesInARow
  .pipe(distinctUntilChanged())
  // output: 1,2,3,1,2,3
  .subscribe(val => console.log('DISTINCT SUB:', val))

myArrayWithDuplicatesInARow
  // output: 1,1,2,2,3,1,2,3
  .subscribe(val => console.log('NON DISTINCT SUB:', val))
