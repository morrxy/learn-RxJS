import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

// emit value every 1s
// take the first 5 emitted values
const example = interval(1000).pipe(take(5))
// output: 0,1,2,3,4
example.subscribe(val => console.log(val))
