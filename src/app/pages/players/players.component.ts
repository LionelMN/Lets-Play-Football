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
  public showContent = false;


  getAllPlayer() : void{
    this.playersService.getAllPlayers().subscribe(bdPlayers => {
      this.players = bdPlayers
      setTimeout( () => {
        this.showContent = true;
      }, 500)
    });
  }

  ngOnInit(): void {
    this.getAllPlayer();
  }

}
