import { empty } from 'rxjs'

empty()
  .subscribe({
    next: () => console.log('Next'),
    complete: () => console.log('Completd!')
  })
