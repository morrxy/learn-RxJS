import { interval } from 'rxjs'
import { startWith } from 'rxjs/operators'

// emit values in sequence every 1s
const source = interval(1000)
// start with -3, -2, -1
const example = source.pipe(startWith(-3, -2, -1))
// output: -3, -2, -1, 0, 1, 2....
example.subscribe(val => console.log(val))
