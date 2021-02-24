import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsServiceService } from 'src/app/services/teams-service.service';
import { PlayerService } from '../../services/player.service';
import { PlayersI } from '../../interfaces/players-i';
import { TeamsI } from '../../interfaces/teams-i';

@Component({
  selector: 'app-individual-team',
  templateUrl: './individual-team.component.html',
  styleUrls: ['./individual-team.component.css']
})
export class IndividualTeamComponent implements OnInit {

  constructor(
    private playersService : PlayerService,
    private teamsService : TeamsServiceService,
    private route : ActivatedRoute,
  ) { }

  teams : TeamsI[] = [];
  team : TeamsI;
  teamName : string = this.route.snapshot.paramMap.get('teamName');
  teamPlayers : PlayersI[] = [];

  getOneTeam() : void{
    this.teamsService.getAllTeams().subscribe(bdTeams => {
      this.teams = bdTeams
      this.team = this.teams.find(team => team['Nombre del equipo'] === this.teamName)
      this.getPlayers()
    });
  }

  getPlayers() : void {
    this.playersService.getAllPlayers().subscribe(allPlayers => {
      let players = allPlayers;
      this.teamPlayers = players.filter(players => players.teamId === this.team.id)
    })
  }

  ngOnInit(): void {
    this.getOneTeam()
  }

}
