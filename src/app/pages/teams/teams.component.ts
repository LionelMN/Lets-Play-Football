import { Component, OnInit } from '@angular/core';
import { TeamsServiceService } from 'src/app/services/teams-service.service';
import { TeamsI } from '../../interfaces/teams-i';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor( private teamsService : TeamsServiceService ) { }

  teams : TeamsI[] = [];
  public showContent = false;

  getAllTeams() : void {
    this.teamsService.getAllTeams().subscribe(allTeams => {
      this.teams = allTeams;
      setTimeout( () => {
        this.showContent = true;
      }, 400)
    })
  }

  ngOnInit(): void {
    this.getAllTeams();
  }

}
