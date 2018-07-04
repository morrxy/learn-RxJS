import { of } from 'rxjs'
import { take } from 'rxjs/operators'

// emit 1,2,3,4,5
const source = of(1, 2, 3, 4, 5)
// take the first emitted value then complete
const example = source.pipe(take(1))
// output: 1
example.subscribe(
  val => console.log(val),
  x => x,
  () => console.log('complete')
)
