import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { TeamsServiceService } from '../../services/teams-service.service';
import { TeamsI } from '../../interfaces/teams-i';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  constructor(
    private playerService : PlayerService,
    private teamService : TeamsServiceService,
    private router : ActivatedRoute,
  ) { }

  createFormGroup() {
    return new FormGroup({
      'Nombre del Jugador' : new FormControl('', Validators.required),
      'Avatar' : new FormControl(''),
      'teamId' : new FormControl( this.defaultTeam ,Validators.required),
    })
  }

  playerForm : FormGroup;
  teams : TeamsI[] = [];
  defaultTeam : string = this.router.snapshot.queryParamMap.get('teamId');
  defaultTeamId : TeamsI;
  public showContent = false;

  onSaveForm(){
    if (this.playerForm.valid){
      if(!this.playerForm.value.img){
        this.playerForm.value.img = 'default.png'
      }
      this.playerService.createOnePlayer(this.playerForm.value).subscribe();
      this.onResetForm();
    } else {
      console.log('Not valid');

    }
  }

  onResetForm(){
    this.playerForm.reset();
  }

  getAllTeams(){
    this.teamService.getAllTeams().subscribe(bdTeams => this.teams = bdTeams)
  }

  getDefaultTeamData(){
    this.teamService.getAllTeams().subscribe(bdTeams => {
      this.defaultTeamId = bdTeams.find(team => team["Nombre del equipo"] === this.defaultTeam);
      setTimeout( () => {
        this.showContent = true;
      }, 100)
    })
  }

  ngOnInit(): void {
    this.playerForm = this.createFormGroup();
    this.getAllTeams();
    if (this.defaultTeam) {
      this.getDefaultTeamData()
    } else {
      this.showContent = true;
    }
  }

}
