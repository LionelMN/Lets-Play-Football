import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
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

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    IndividualLeagueComponent,
    TeamsComponent,
    IndividualTeamComponent,
    IndividualPlayerComponent,
    PlayersComponent
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
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
