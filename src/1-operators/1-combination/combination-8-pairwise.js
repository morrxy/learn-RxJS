import { interval } from 'rxjs'
import { pairwise, take } from 'rxjs/operators'

// Returns: [0,1], [1,2], [2,3], [3,4], [4,5]

const s1 = interval(1000)

s1.pipe(take(7)).subscribe(console.log)

s1.pipe(pairwise(), take(5))
  .subscribe(console.log)
