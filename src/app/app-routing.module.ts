import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { IndividualLeagueComponent } from './pages/individual-league/individual-league.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { IndividualTeamComponent } from './pages/individual-team/individual-team.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'leagues', component: LeaguesComponent},
  { path: 'leagues/:leagueName', component: IndividualLeagueComponent},
  { path: 'leagues/:leagueName/:teamName', redirectTo: '/teams/:teamName' },
  { path: 'teams', component: TeamsComponent},
  { path: 'teams/:teamName', component: IndividualTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
