import { fromEvent } from 'rxjs'
import { map, debounceTime } from 'rxjs/operators'

const input = document.getElementById('example')

// for every keyup, map to current input value
const example = fromEvent(input, 'keyup').pipe(map(i => i.currentTarget.value))

// wait .5s between keyups to emit current value
// throw away all other values
const debouncedInput = example.pipe(debounceTime(500))

// log values
debouncedInput.subscribe(val => {
  console.log(`Debounced Input: ${val}`)
})
