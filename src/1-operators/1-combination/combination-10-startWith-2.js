import { of } from 'rxjs'
import { startWith, scan } from 'rxjs/operators'

// emit ('World!', 'Goodbye', 'World!')
const source = of('World!', 'Goodbye', 'World!')
// start with 'Hello', concat current string to previous
const example = source.pipe(
  startWith('Hello'),
  scan((acc, curr) => `${acc} ${curr}`)
)
/*
  output:
  "Hello"
  "Hello World!"
  "Hello World! Goodbye"
  "Hello World! Goodbye World!"
*/
example.subscribe(val => console.log(val))
