import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { TeamsServiceService } from '../../services/teams-service.service';
import { TeamsI } from '../../interfaces/teams-i';
import { PlayersI } from '../../interfaces/players-i';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(
    private playersService : PlayerService,
    private teamsService : TeamsServiceService
  ) { }

  searchForm : FormGroup;
  isSearchActive : boolean = false;
  link : string;
  allTeams : string[] = [];
  allPlayers : string[] = [];
  filteredPlayers : string[] = [];
  filteredTeams : string[] = [];

  createFormGroup() {
    return new FormGroup({
      'searchCategory' : new FormControl('Teams', Validators.required),
      'searchItem' : new FormControl('', Validators.required),
    })
  }

  getAllTeams(){
    return this.teamsService.getAllTeams().subscribe(bdTeams => {
      this.allTeams = bdTeams.map(bdTeams => bdTeams['Nombre del equipo'])
    })
  }

  getAllPlayers(){
    return this.playersService.getAllPlayers().subscribe(bdPlayers => {
      this.allPlayers = bdPlayers.map(bdPlayers => bdPlayers['Nombre del Jugador'])
    })
  }

  filterItems(string){
    if (this.searchForm.value.searchCategory === "teams"){
      this.filteredTeams = this.allTeams;
      this.filteredTeams = this.allTeams.filter( teams => teams.includes(string));
    } else {
        this.filteredPlayers = this.allPlayers;
        this.filteredPlayers = this.allPlayers.filter( players => players.includes(string));
    }
  }

  onActivateSearch(){
    this.isSearchActive = true;
  }

  onDeactivateSearch(){
    setTimeout( () => {
      this.isSearchActive = false;
    }, 500)
  }

  selectSuggestion(suggestedOption) {
    this.searchForm.value.searchItem = suggestedOption;
    this.buildLink()
  }

  buildLink(){
    this.link = `/${this.searchForm.value.searchCategory}/${this.searchForm.value.searchItem}`
  }

  onResetForm(){
    this.searchForm.reset();
  }

  ngOnInit(): void {
    this.searchForm = this.createFormGroup();
    this.getAllTeams();
    this.getAllPlayers();
    this.filteredPlayers = this.allPlayers;
  }

  ngOnChanges() : void {
  }

}
