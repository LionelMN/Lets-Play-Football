import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { PlayersI } from '../../interfaces/players-i';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor( private playersService : PlayerService ) { }

  players : PlayersI[] = [];

  getAllPlayer() : void{
    this.playersService.getAllPlayers().subscribe(bdPlayers => this.players = bdPlayers);
  }

  ngOnInit(): void {
    this.getAllPlayer();
  }

}
