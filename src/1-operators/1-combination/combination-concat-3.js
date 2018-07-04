import { of, concat } from 'rxjs'
import { delay } from 'rxjs/operators'

// emits 1,2,3
const sourceOne = of(1, 2, 3)
// emits 4,5,6
const sourceTwo = of(4, 5, 6)

// delay 3 seconds then emit
const sourceThree = sourceOne.pipe(delay(3000))
// sourceTwo waits on sourceOne to complete before subscribing
const example = concat(sourceThree, sourceTwo)
// output: 1,2,3,4,5,6
example.subscribe(val =>
  console.log('Example: Delayed source one:', val)
)
