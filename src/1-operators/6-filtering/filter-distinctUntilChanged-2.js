// https://www.learnrxjs.io/operators/filtering/distinctuntilchanged.html

import { from } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

const sampleObject = { name: 'Test' }
// Objects must be same reference
const myArrayWithDuplicateObjects = from([
  sampleObject,
  sampleObject,
  sampleObject
])
// only out distinct objects, based on last emitted value
myArrayWithDuplicateObjects
  .pipe(distinctUntilChanged())
  // output: 'DISTINCT OBJECTS: {name: 'Test'}
  .subscribe(val => console.log('DISTINCT OBJECTS:', val))
