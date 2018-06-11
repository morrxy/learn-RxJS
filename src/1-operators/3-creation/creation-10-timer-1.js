import { timer } from 'rxjs'

// emit 0 after 1 second then complete, since no second argument is supplied
const source = timer(1000)
// output: 0
source.subscribe(val => console.log(val))
