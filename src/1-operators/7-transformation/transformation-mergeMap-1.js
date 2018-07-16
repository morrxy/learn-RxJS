// https://www.learnrxjs.io/operators/transformation/mergemap.html

import { of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

// emit 'Hello'
const source = of('Hello')
// map to inner observable and flatten
const example = source.pipe(mergeMap(val => of(`${val} World!`)))
// output: 'Hello World!'
const subscribe = example.subscribe(val => console.log(val))
