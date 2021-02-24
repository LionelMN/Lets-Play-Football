import { Component, OnInit } from '@angular/core';
import { LeaguesI } from '../../interfaces/leagues-i'
import { LeaguesService } from '../../services/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  constructor( private leaguesService: LeaguesService) { }

  ligas : LeaguesI[] = [];

  getAllLeagues() : void{
    this.leaguesService.getAllLeagues().subscribe(bdLeagues => this.ligas = bdLeagues);
  }

  ngOnInit(): void {
    this.getAllLeagues();
  }

}
