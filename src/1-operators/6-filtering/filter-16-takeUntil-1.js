import { interval, timer } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

// emit value every 1s
const source = interval(1000)
// after 5 seconds, emit value
const timer$ = timer(5000)
timer$.subscribe(
  x => console.log('timer')
)
// when timer emits after 5s, complete source
const example = source.pipe(takeUntil(timer$))
// output: 0,1,2,3
example.subscribe(
  val => console.log(val),
  val => console.log(val),
  val => console.log('end')
)
