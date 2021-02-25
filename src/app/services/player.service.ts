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
    return this.http.get(`http://192.168.0.29:3000/jugadores`) as Observable<PlayersI[]>
  }

  createOnePlayer(newPlayer) : Observable<PlayersI> {
    return this.http.post(`http://192.168.0.29:3000/jugadores`, newPlayer) as Observable<PlayersI>
  }

  editOnePlayer(player) : Observable<PlayersI> {
    return this.http.patch(`http://192.168.0.29:3000/jugadores/${player}`, player['Nombre del Jugador']) as Observable<PlayersI>
  }

  deleteOnePlayer(playerName) : Observable<PlayersI> {
    return this.http.delete(`http://192.168.0.29:3000/jugadores/${playerName}`) as Observable<PlayersI>
  }

}
