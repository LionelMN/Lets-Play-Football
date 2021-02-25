import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaguesI } from '../interfaces/leagues-i'

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http : HttpClient) { }

  getAllLeagues() : Observable<LeaguesI[]>{
    return this.http.get(`http://192.168.0.29:3000/ligas`) as Observable<LeaguesI[]>
  }

}
