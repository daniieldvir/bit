import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedin: boolean;

  constructor(private utilsService: UtilsService) {}

  checkIsLoggedIn() {
    this.isLoggedin = this.utilsService.load('user') ? true : false;
    return this.isLoggedin;
  }
}

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   isLoggedIn = false;
//   constructor() {}

//   checkIsLoggedIn(): Promise<boolean> {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(this.isLoggedIn);
//       }, 0);
//     });
//   }
// }
// import { Injectable } from '@angular/core';
// import { StorageService } from './storage.service';
