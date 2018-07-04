import { fromEvent } from 'rxjs'
import { take, tap } from 'rxjs/operators'

const oneClickEvent = fromEvent(document, 'click').pipe(
  take(1),
  tap(v => {
    document.getElementById('locationDisplay').innerHTML =
      `Your first click was on location ${v.screenX}:${v.screenY}`
  })
)

oneClickEvent.subscribe(
  val => console.log(val),
  val => console.log(val),
  val => console.log('end')
)
