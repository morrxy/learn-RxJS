// https://www.learnrxjs.io/operators/transformation/mergemap.html

import { of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

// emit 'Hello'
const source = of('Hello')
// mergeMap also emits result of promise
const myPromise = val => new Promise(resolve => resolve(`${val} World From Promise!`))
// map to promise and emit result
const example = source.pipe(mergeMap(val => myPromise(val)))
// output: 'Hello World From Promise'
const subscribe = example.subscribe(val => console.log(val))
