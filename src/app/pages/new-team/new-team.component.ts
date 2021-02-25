import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamsServiceService } from '../../services/teams-service.service';
import { LeaguesService } from '../../services/leagues.service';
import { LeaguesI } from '../../interfaces/leagues-i';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {

  constructor(
    private teamService : TeamsServiceService,
    private leagueService : LeaguesService,
    private router : ActivatedRoute
  ) { }

  createFormGroup() {
    return new FormGroup({
      'Nombre del equipo' : new FormControl('', Validators.required),
      'Logo de la Liga' : new FormControl(''),
      'Liga' : new FormControl('', Validators.required),
    })
  }

  teamForm : FormGroup;
  leagues : LeaguesI[] = [];
  defaultLeague : string = this.router.snapshot.queryParamMap.get('leagueId');
  defaultLeagueId : LeaguesI;
  public showContent = false;

  onSaveForm(){
    if (this.teamForm.valid){
      if(!this.teamForm.value.img){
        this.teamForm.value.img = 'default.png'
      }
      this.teamService.createOneTeam(this.teamForm.value).subscribe();
      this.onResetForm();
    } else {
      console.log('Not valid');

    }
  }

  onResetForm(){
    this.teamForm.reset();
  }

  getAllTeams(){
    this.leagueService.getAllLeagues().subscribe(bdLeagues => this.leagues = bdLeagues)
  }

  getDefaultLeagueData(){
    this.leagueService.getAllLeagues().subscribe(bdLeagues => {
      this.defaultLeagueId = bdLeagues.find(league => league["Nombre De La Liga"] === this.defaultLeague);
      setTimeout( () => {
        this.showContent = true;
      }, 100)
    })
  }

  ngOnInit(): void {
    this.teamForm = this.createFormGroup();
    this.getAllTeams();
    if (this.defaultLeague) {
      this.getDefaultLeagueData()
    } else {
      this.showContent = true;
    }
  }

}
