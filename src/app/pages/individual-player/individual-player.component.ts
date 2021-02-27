import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PlayersI } from '../../interfaces/players-i';
import { TeamsServiceService } from '../../services/teams-service.service';
import { TeamsI } from '../../interfaces/teams-i';


@Component({
  selector: 'app-individual-player',
  templateUrl: './individual-player.component.html',
  styleUrls: ['./individual-player.component.css']
})
export class IndividualPlayerComponent implements OnInit {

  constructor(
    private playersService : PlayerService,
    private teamService : TeamsServiceService,
    private route : ActivatedRoute,
  ) { }

  players : PlayersI[] = [];
  player : PlayersI;
  playerName : string = this.route.snapshot.paramMap.get('playerName');
  team : TeamsI;
  public showContent = false;

  getOnePlayer() : void{
    this.playersService.getAllPlayers().subscribe(bdPlayers => {
      this.players = bdPlayers
      this.player = this.players.find(player => player['Nombre del Jugador'] === this.playerName);
      this.getTeam();
      setTimeout( () => {
        this.showContent = true;
      }, 400)
    });
  }

  getTeam(){
    this.teamService.getAllTeams().subscribe(bdTeams => {
      this.team = bdTeams.find(bdTeam => bdTeam['id'] === this.player.teamId)
    })
  }

  ngOnInit(): void {
    this.getOnePlayer();
  }

  ngDoCheck() :void {
    if (this.playerName !== this.route.snapshot.paramMap.get('playerName')){
      this.playerName = this.route.snapshot.paramMap.get('playerName')
      this.getOnePlayer();
    }
  }

}
