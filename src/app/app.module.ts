import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryGamesPredictedComponent } from './history-games-predicted/history-games-predicted.component';
import { ModelsNameComponent } from './models-name/models-name.component';
import { ModelsScoreComponent } from './models-score/models-score.component';
import { SpecificGamePredictionComponent } from './specific-game-prediction/specific-game-prediction.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TokenTextAreaComponent } from './token-text-area/token-text-area.component';
import { FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    HistoryGamesPredictedComponent,
    ModelsNameComponent,
    ModelsScoreComponent,
    SpecificGamePredictionComponent,
    HomeComponent,
    NavBarComponent,
    TokenTextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
