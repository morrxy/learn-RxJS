import { interval } from 'rxjs'
import { take, map, combineAll } from 'rxjs/operators'

const source = interval(1000).pipe(take(2))

const example = source.pipe(
  map(val => interval(1000)
    .pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
)

const combined = example.pipe(combineAll())

combined.subscribe(val => console.log(val))
