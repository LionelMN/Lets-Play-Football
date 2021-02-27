import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { IndividualLeagueComponent } from './pages/individual-league/individual-league.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { IndividualTeamComponent } from './pages/individual-team/individual-team.component';
import { IndividualPlayerComponent } from './pages/individual-player/individual-player.component';
import { PlayersComponent } from './pages/players/players.component';
import { NewPlayerComponent } from './pages/new-player/new-player.component';
import { NewTeamComponent } from './pages/new-team/new-team.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { EditTeamComponent } from './pages/edit-team/edit-team.component';
import { EditPlayerComponent } from './pages/edit-player/edit-player.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    IndividualLeagueComponent,
    TeamsComponent,
    IndividualTeamComponent,
    IndividualPlayerComponent,
    PlayersComponent,
    NewPlayerComponent,
    NewTeamComponent,
    SpinnerComponent,
    SearchbarComponent,
    EditTeamComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
