import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayersI } from '../interfaces/players-i'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http : HttpClient) { }

  getAllPlayers() : Observable<PlayersI[]>{
    return this.http.get(`http://localhost:3000/jugadores`) as Observable<PlayersI[]>
  }
}
