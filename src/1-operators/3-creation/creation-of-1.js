import { of } from 'rxjs'

const source = of(1, 2, 3, 4, 5)
// output: 1,2,3,4,5
source.subscribe(val => console.log(val))
