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
  public showContent = false;


  getAllLeagues() : void{
    this.leaguesService.getAllLeagues().subscribe(bdLeagues => {
      this.ligas = bdLeagues;
      setTimeout( () => {
        this.showContent = true;
      }, 200)
    });
  }

  ngOnInit(): void {
    this.getAllLeagues();
  }

}
