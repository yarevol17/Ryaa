// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverURL: 'http://localhost:3000/api/',
    firebaseConfig : {
    apiKey: "AIzaSyCfvD8DNj7scv8l6Ta5UY3SkGUCvP62lp0",
    authDomain: "rate-student.firebaseapp.com",
    projectId: "rate-student",
    storageBucket: "rate-student.appspot.com",
    messagingSenderId: "703407267023",
    appId: "1:703407267023:web:0c89fc80f53678ac026bba"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
