import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryGamesPredictedComponent} from './components/history-games-predicted/history-games-predicted.component';
import {ModelsNameComponent} from './components/models-name/models-name.component';
import {ModelsScoreComponent} from './components/models-score/models-score.component';
import {SpecificGamePredictionComponent} from './components/specific-game-prediction/specific-game-prediction.component';
import {HomeComponent} from './components/home/home.component';
import {LiveGamesPredictedComponent} from './components/live-games-predicted/live-games-predicted.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';

const routes: Routes = [
  { path: 'history-games-predicted', component: HistoryGamesPredictedComponent },
  { path: 'live-games-predicted', component: LiveGamesPredictedComponent },
  { path: 'models-name', component: ModelsNameComponent },
  { path: 'models-score', component: ModelsScoreComponent },
  { path: 'specific-game-prediction', component: SpecificGamePredictionComponent },
  { path: 'user-stats', component: UserStatsComponent },
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
