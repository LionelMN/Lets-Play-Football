import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamsServiceService } from '../../services/teams-service.service';
import { LeaguesService } from '../../services/leagues.service';
import { LeaguesI } from '../../interfaces/leagues-i';
import { ActivatedRoute } from '@angular/router';
import { TeamsI } from '../../interfaces/teams-i';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor(
    private teamService : TeamsServiceService,
    private leagueService : LeaguesService,
    private router : ActivatedRoute
  ) { }

  teamForm : FormGroup;
  leagues : LeaguesI[] = [];
  defaultTeamName : string = this.router.snapshot.paramMap.get('teamName');
  defaultLeague : LeaguesI;
  team : TeamsI;
  public showContent = true;

  createFormGroup() {
    return new FormGroup({
      'Nombre del equipo' : new FormControl(this.defaultTeamName, Validators.required),
      'Logo de la Liga' : new FormControl(''),
      'Liga' : new FormControl(this.defaultLeague, Validators.required),
    })
  }

  onSaveForm(){
    if (this.teamForm.valid){
      if(!this.teamForm.value.img){
        this.teamForm.value.img = 'default.png'
      }
      this.teamService.editOneTeam(this.teamForm.value).subscribe();
      this.onResetForm();
    } else {
      console.log('Not valid');

    }
  }

  onResetForm(){
    this.teamForm.reset();
  }

  getAllTeams(){
    this.leagueService.getAllLeagues().subscribe(bdLeagues => this.leagues = bdLeagues);
    setTimeout( () => {
      this.getEditedTeamData();
    }, 400)
  }

  getEditedTeamData(){
    this.teamService.getAllTeams().subscribe(bdTeams => {
      this.team = bdTeams.find(team => team['Nombre del equipo'] === this.defaultTeamName);
      this.getDefaultLeagueData();
    });
  }

  getDefaultLeagueData(){
    this.defaultLeague = this.leagues.find(league => league['Identificador'] === this.team.Liga);
  }

  ngOnInit(): void {
    this.teamForm = this.createFormGroup();
    this.getAllTeams();
  }

}
