import { from } from 'rxjs'

// works on js collections
const map = new Map()
map.set(1, 'Hi')
map.set(2, 'Bye')

const mapSource = from(map)
// output: [1, 'Hi'], [2, 'Bye']
mapSource.subscribe(val => console.log(val))
