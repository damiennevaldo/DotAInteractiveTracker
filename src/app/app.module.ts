import { HttpClientModule } from '@angular/common/http';
import { HomeBarComponent } from './components/home-bar/home-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryGamesPredictedComponent } from './components/history-games-predicted/history-games-predicted.component';
import { ModelsNameComponent } from './components/models-name/models-name.component';
import { ModelsScoreComponent } from './components/models-score/models-score.component';
import { SpecificGamePredictionComponent } from './components/specific-game-prediction/specific-game-prediction.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TokenTextAreaComponent } from './components/token-text-area/token-text-area.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ResultTableComponent } from './components/result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryGamesPredictedComponent,
    ModelsNameComponent,
    ModelsScoreComponent,
    SpecificGamePredictionComponent,
    HomeComponent,
    HomeBarComponent,
    NavBarComponent,
    TokenTextAreaComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
