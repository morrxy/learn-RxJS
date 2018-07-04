import { interval, merge } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

const source = merge(
  // emit every .75 seconds
  interval(750),
  // emit every 1 second
  interval(1000)
)
// throttle in middle of emitted values
const example = source.pipe(throttleTime(1200))
// output: 0...1...4...4...8...7
example.subscribe(val => console.log(val))
