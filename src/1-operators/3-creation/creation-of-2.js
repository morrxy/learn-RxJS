import { of } from 'rxjs'

const source = of({ name: 'Brian' }, [1, 2, 3], function hello () {
  return 'Hello'
})
// output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
source.subscribe(val => console.log(val))
