import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LinkedinService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://reqres.in/api/users')
    //https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
  }

}
