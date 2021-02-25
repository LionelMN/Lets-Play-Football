import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamsI } from '../interfaces/teams-i';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {

  constructor(private http : HttpClient) { }

  getAllTeams() : Observable<TeamsI[]>{
    return this.http.get(`http://192.168.0.29:3000/equipos`) as Observable<TeamsI[]>
  }

  createOneTeam(newTeam) : Observable<TeamsI> {
    return this.http.post(`http://192.168.0.29:3000/equipos`, newTeam) as Observable<TeamsI>
  }

  editOneTeam(team) : Observable<TeamsI> {
    return this.http.patch(`http://192.168.0.29:3000/equipos/${team}`, team['Nombre del equipo']) as Observable<TeamsI>
  }

  deleteOneTeam(teamName) : Observable<TeamsI> {
    return this.http.delete(`http://192.168.0.29:3000/equipos/${teamName}`) as Observable<TeamsI>
  }
}
