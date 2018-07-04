import { from } from 'rxjs'

// emit string as a sequence
const source = from('Hello World')
// output: 'H','e','l','l','o',' ','W','o','r','l','d'
source.subscribe(val => console.log(val))
