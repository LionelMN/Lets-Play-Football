import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamsServiceService } from '../../services/teams-service.service';
import { PlayerService } from '../../services/player.service';
import { PlayersI } from '../../interfaces/players-i';
import { TeamsI } from '../../interfaces/teams-i';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  constructor(
    private teamService : TeamsServiceService,
    private playerService : PlayerService,
    private router : ActivatedRoute
  ) { }

  playerForm : FormGroup;
  teams : TeamsI[] = [];
  defaultPlayerName : string = this.router.snapshot.paramMap.get('playerName');
  defaultTeam : TeamsI;
  player : PlayersI;
  public showContent = true;

  createFormGroup() {
    return new FormGroup({
      'Nombre del Jugador' : new FormControl(this.defaultPlayerName, Validators.required),
      'Avatar' : new FormControl(''),
      'teamId' : new FormControl(this.defaultTeam, Validators.required),
    })
  }

  onSaveForm(){
    if (this.playerForm.valid){
      if(!this.playerForm.value.img){
        this.playerForm.value.img = 'default.png'
      }
      this.playerService.editOnePlayer(this.playerForm.value).subscribe();
      this.onResetForm();
    } else {
      console.log('Not valid');

    }
  }

  onResetForm(){
    this.playerForm.reset();
  }

  getAllPlayers(){
    this.teamService.getAllTeams().subscribe(bdTeams => this.teams = bdTeams);
    setTimeout( () => {
      this.getEditedPlayerData();
    }, 400)
  }

  getEditedPlayerData(){
    this.playerService.getAllPlayers().subscribe(bdPlayers => {
      this.player = bdPlayers.find(player => player['Nombre del Jugador'] === this.defaultPlayerName);
      this.getDefaultTeamData();
    });
  }

  getDefaultTeamData(){
    this.defaultTeam = this.teams.find(team => team.id === this.player.teamId);
  }

  ngOnInit(): void {
    this.playerForm = this.createFormGroup();
    this.getAllPlayers();
  }

}
