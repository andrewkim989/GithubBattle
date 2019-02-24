import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  data1: any;
  data2: any;

  constructor(private _http: HttpClient) { }

  getPlayer(name) {
    return this._http.get("https://api.github.com/users/" + name);
  }

  addUser(user) {
    return this._http.post("/users", user);
  }

  getUsers() {
    return this._http.get("/users");
  }
}
