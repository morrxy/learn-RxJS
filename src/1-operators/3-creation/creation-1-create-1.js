import { Observable } from 'rxjs'

const hello = Observable.create(function (observer) {
  observer.next('Hello')
  observer.next('World')
})

hello.subscribe(val => console.log(val))
