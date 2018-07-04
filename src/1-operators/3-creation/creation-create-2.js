import { Observable } from 'rxjs'

const evenNumbers = Observable.create(function (observer) {
  let value = 0
  const interval = setInterval(() => {
    if (value % 2 === 0) {
      observer.next(value)
    }
    value++
  }, 1000)

  return () => clearInterval(interval)
})

const subscribe = evenNumbers.subscribe(val => console.log(val))

setTimeout(() => {
  subscribe.unsubscribe()
}, 10000)
