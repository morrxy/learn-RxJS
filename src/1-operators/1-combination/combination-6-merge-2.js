import { interval } from 'rxjs'
import { merge } from 'rxjs/operators'

// emit every 2.5 seconds
const first = interval(2500)
// emit every 1 second
const second = interval(1000)
// used as instance method
const example = first.pipe(merge(second))
// output: 0,1,0,2....
example.subscribe(val => console.log(val))
