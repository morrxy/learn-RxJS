import { timer, interval } from 'rxjs'
import { debounce } from 'rxjs/operators'

// emit value every 1 second, ex. 0...1...2
const intv = interval(1000)
// raise the debounce time by 200ms each second
const debouncedInterval = intv.pipe(debounce(val => timer(val * 200)))
/*
  After 5 seconds, debounce time will be greater than interval time,
  all future values will be thrown away
  output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
*/
debouncedInterval.subscribe(
  val => console.log(`Example Two: ${val}`),
  err => console.log('err: ', err),
  () => console.log('end')
)
