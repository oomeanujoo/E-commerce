import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  CommonAPI(params: any) {
    return this.http.post(`http://adnatesolutions.com:3001/data/`, params);
  }


}
