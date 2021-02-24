import { Component, OnInit } from '@angular/core';
import { LeaguesI } from '../../interfaces/leagues-i';
import { TeamsI } from '../../interfaces/teams-i';
import { LeaguesService } from '../../services/leagues.service';
import { TeamsServiceService } from '../../services/teams-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-league',
  templateUrl: './individual-league.component.html',
  styleUrls: ['./individual-league.component.css']
})
export class IndividualLeagueComponent implements OnInit {

  constructor(
    private leaguesService: LeaguesService,
    private teamsService : TeamsServiceService,
    private route : ActivatedRoute,
  ) { }

  ligas : LeaguesI[] = [];
  liga : LeaguesI;
  leagueName : string = this.route.snapshot.paramMap.get('leagueName');
  leagueTeams : TeamsI[] = [];

  getOneLeagues() : void{
    this.leaguesService.getAllLeagues().subscribe(bdLeagues => {
      this.ligas = bdLeagues
      this.liga = this.ligas.find(liga => liga['Nombre De La Liga'] === this.leagueName)
      this.getTeams()
    });
  }

  getTeams() : void {
    this.teamsService.getAllTeams().subscribe(allTeams => {
      let teams = allTeams;
      this.leagueTeams = teams.filter(teams => teams.Liga === this.liga.Identificador)
    })
  }

  ngOnInit(): void {
    this.getOneLeagues()
  }

}
