import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class bitcoinService {
  constructor(private http: HttpClient) {}

  getRate() {
    return this.http
      .get('https://blockchain.info/tobtc?currency=USD&value=1')
      .pipe(
        map((res) => {
          console.log(res);
          return res;
        })
      );
  }
}
