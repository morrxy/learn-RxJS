import { interval } from 'rxjs'
import { takeUntil, map, withLatestFrom, filter, scan } from 'rxjs/operators'

// emit value every 1s
const source = interval(1000)

// only allow values that are even
const evenSource = source.pipe(filter(val => val % 2 === 0))

// keep a running total of the number of even numbers out
const evenNumberCount = evenSource.pipe(
  scan((acc, _) => acc + 1, 0)
)

// do not emit until 5 even numbers have been emitted
const fiveEvenNumbers = evenNumberCount.pipe(filter(val => val > 5))

const example = evenSource.pipe(
  // also give me the current even number count for display
  withLatestFrom(evenNumberCount),
  map(([val, count]) => `Even number (${count}) : ${val}`),
  // when five even numbers have been emitted, complete source observable
  takeUntil(fiveEvenNumbers)
)
/*
    Even number (1) : 0,
    Even number (2) : 2
    Even number (3) : 4
    Even number (4) : 6
    Even number (5) : 8
*/
example.subscribe(
  val => console.log(val),
  val => console.log(val),
  val => console.log('end')
)
