// https://www.learnrxjs.io/operators/transformation/switchmap.html

import { interval, fromEvent, merge, empty } from 'rxjs'
import { mapTo, startWith, switchMap, scan, takeWhile } from 'rxjs/operators'

const countdownSeconds = 10
const setHTML = id => val => (document.getElementById(id).innerHTML = val)
const pauseButton = document.getElementById('pause')
const resumeButton = document.getElementById('resume')
const interval$ = interval(1000).pipe(mapTo(-1))

const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false))
const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true))

const timer$ = merge(pause$, resume$)
  .pipe(
    startWith(true),
    switchMap(val => (val ? interval$ : empty())),
    scan((acc, curr) => {
      console.log('curr:', curr, 'acc:', acc)
      return curr ? curr + acc : acc
    }, countdownSeconds),
    takeWhile(v => v >= 0)
  )
  .subscribe(setHTML('remaining'))
