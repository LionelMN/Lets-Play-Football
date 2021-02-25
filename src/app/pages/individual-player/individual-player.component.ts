import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PlayersI } from '../../interfaces/players-i';


@Component({
  selector: 'app-individual-player',
  templateUrl: './individual-player.component.html',
  styleUrls: ['./individual-player.component.css']
})
export class IndividualPlayerComponent implements OnInit {

  constructor(
    private playersService : PlayerService,
    private route : ActivatedRoute,
  ) { }

  players : PlayersI[] = [];
  player : PlayersI;
  playerName : string = this.route.snapshot.paramMap.get('playerName');
  public showContent = false;

  getOnePlayer() : void{
    this.playersService.getAllPlayers().subscribe(bdPlayers => {
      this.players = bdPlayers
      this.player = this.players.find(player => player['Nombre del Jugador'] === this.playerName);
      setTimeout( () => {
        this.showContent = true;
      }, 400)
    });
  }

  ngOnInit(): void {
    this.getOnePlayer();
  }

}
