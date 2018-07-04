// https://www.learnrxjs.io/operators/error_handling/retrywhen.html

// import { interval, timer } from 'rxjs'
// import { retryWhen, map, tap, delayWhen, finalize } from 'rxjs/operators'

// export const genericRetryStrategy = ({
//   maxRetryAttempts = 3,
//   scalingDuration = 1000,
//   excludedStatusCodes = []
// }: {
//   maxRetryAttempts?: number,
//   scalingDuration?: number,
//   excludedStatusCodes?: number[]
// } = {}) => (attempts: Observable<any>) => {
//   return attempts.pipe(
//     mergeMap((error, i) => {
//       const retryAttempt = i + 1;
//       // if maximum number of retries have been met
//       // or response is a status code we don't wish to retry, throw error
//       if (
//         retryAttempt > maxRetryAttempts ||
//         excludedStatusCodes.find(e => e === error.status)
//       ) {
//         return _throw(error);
//       }
//       console.log(
//         `Attempt ${retryAttempt}: retrying in ${retryAttempt *
//           scalingDuration}ms`
//       );
//       // retry after 1s, 2s, etc...
//       return timer(retryAttempt * scalingDuration);
//     }),
//     finalize(() => console.log('We are done!'))
//   );
// };

// import { Component, OnInit } from '@angular/core';
// import { catchError, retryWhen  } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { genericRetryStrategy } from './rxjs-utils';
// import { AppService } from './app.service';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent implements OnInit  {
//   constructor(private _appService: AppService) {}

//   ngOnInit() {
//     this._appService
//       .getData(500)
//       .pipe(
//         retryWhen(genericRetryStrategy()),
//         catchError(error => of(error))
//       )
//       .subscribe(console.log);

//     // excluding status code, delay for logging clarity
//     setTimeout(() => {
//     this._appService
//       .getData(500)
//       .pipe(
//         retryWhen(genericRetryStrategy({
//           scalingDuration: 2000,
//           excludedStatusCodes: [500]
//         })),
//         catchError(error => of(error))
//       )
//       .subscribe(e => console.log('Exluded code:', e.status));

//     }, 8000);
//   }
// }
