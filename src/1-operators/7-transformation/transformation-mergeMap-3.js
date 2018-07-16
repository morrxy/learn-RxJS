// https://www.learnrxjs.io/operators/transformation/mergemap.html

import { of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

/*
  you can also supply a second argument which receives the source value and emitted
  value of inner observable or promise
*/
// emit 'Hello'
const source = of('Hello')
// mergeMap also emits result of promise
const myPromise = val => new Promise(resolve => resolve(`${val} World From Promise!`))
const example = source.pipe(
  mergeMap(
    val => myPromise(val),
    (valueFromSource, valueFromPromise) => {
      return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`
    }
  )
)
// output: "Source: Hello, Promise: Hello World From Promise!"
const subscribe = example.subscribe(val => console.log(val))
