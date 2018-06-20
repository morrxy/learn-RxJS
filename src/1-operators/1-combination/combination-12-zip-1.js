import { of, zip } from 'rxjs'
import { delay } from 'rxjs/operators'

const sourceOne = of('Hello')
const sourceTwo = of('World!')
const sourceThree = of('Goodbye')
const sourceFour = of('World!')
// wait until all observables have emitted a value then emit all as an array
const example = zip(
  sourceOne,
  sourceTwo.pipe(delay(1000)),
  sourceThree.pipe(delay(2000)),
  sourceFour.pipe(delay(3000))
)
// output: ["Hello", "World!", "Goodbye", "World!"]
example.subscribe(val => console.log(val))
