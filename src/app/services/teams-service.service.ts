import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamsI } from '../interfaces/teams-i'

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {

  constructor(private http : HttpClient) { }

  getAllTeams() : Observable<TeamsI[]>{
    return this.http.get(`http://localhost:3000/equipos`) as Observable<TeamsI[]>
  }
}
