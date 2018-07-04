import { fromEvent, interval } from 'rxjs'
import { audit } from 'rxjs/operators'

fromEvent(document, 'click')
  .pipe(
    audit(ev => interval(1000))
  )
  .subscribe(val => console.log(val))
