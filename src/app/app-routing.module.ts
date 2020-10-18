import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryGamesPredictedComponent} from './components/history-games-predicted/history-games-predicted.component';
import {ModelsNameComponent} from './models-name/models-name.component';
import {ModelsScoreComponent} from './models-score/models-score.component';
import {SpecificGamePredictionComponent} from './specific-game-prediction/specific-game-prediction.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'history-games-predicted', component: HistoryGamesPredictedComponent },
  { path: 'models-name', component: ModelsNameComponent },
  { path: 'models-score', component: ModelsScoreComponent },
  { path: 'specific-game-prediction', component: SpecificGamePredictionComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
