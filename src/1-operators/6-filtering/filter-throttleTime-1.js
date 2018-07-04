import { interval } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

// emit value every 1 second
const source = interval(1000)
/*
  throttle for five seconds
  last value emitted before throttle ends will be emitted from source
*/
const example = source.pipe(throttleTime(5000))
// output: 0...6...12
example.subscribe(val => console.log(val))
