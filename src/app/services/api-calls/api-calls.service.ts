import {TokenService} from './../token/token.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import axios from 'axios';

// ?access_token=M
const BASE_URL = 'https://dota-prediction.herokuapp.com/';
const URL_LAST_RUN = '1.0/model/last-run';
const URL_LIST_ROUTES = '1.0/list-routes';
// Parameter : page
const URL_GAMES_PREDICTED = '1.0/games-predicted?page=';
const URL_GAMES_PREDICTED_LIVE = '1.0/games-predicted-live?page=';
// Parameter : match-id
const URL_PREDICT = '1.0/model/predict/';
// Parameter : max-line
const URL_SCORE = '1.0/model/score/';
const URL_STATS = '1.0/users/stats';
const LOL_PIERRE_PTDR = '1.0/users/personnetrouverajamaismaroutedecreationdutilisateur';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private token: TokenService) { }

  async callApi(apiUrl: string, parameter?: any | undefined): Promise<any> {
    let uri = BASE_URL + apiUrl;
    if (parameter){
      uri += parameter;
   }
    console.log('Appel de :' + uri);
    return await axios.get(uri, {
      headers:
        {
          access_token: this.token.getToken(),
          'Access-Control-Allow-Origin': '*'}
        }
        );
  }
    // Call to list-routes
   getListroutes(): Promise<any> {
    try{
      return this.callApi(URL_LIST_ROUTES);
    } catch (error) {
      return error;
    }
    }

    // Call to games-predicted
    getGamesPredictedPaginated(page: number): Promise <any> {
      try{
        return this.callApi(URL_GAMES_PREDICTED, page);
      } catch (error) {
        return error;
      }
    }

    // Call to games-predicted
    getGamesPredictedLivePaginated(page: number): Promise <any> {
      try{
        return this.callApi(URL_GAMES_PREDICTED_LIVE, page);
      } catch (error) {
        return error;
      }
    }

    // Call to predict
    getPredict(matchId: number): Promise <any> {
      try{
        return this.callApi(URL_PREDICT, matchId);
      } catch (error) {
          return error;
      }
    }

    // Call to score
    getScore(maxLine: number): Promise <any> {
      try{
        return this.callApi(URL_SCORE, maxLine);
      } catch (error) {
          return error;
      }
    }

    // Call to stats
    getStats(): Promise <any> {
      try{
        return this.callApi(URL_STATS);
      } catch (error) {
          return error;
      }
    }

        // Call to stats
    getLastRun(): Promise <any> {
      try{
        return this.callApi(URL_LAST_RUN);
      } catch (error) {
          return error;
        }
    }

    // Call to the truth
    gettheTruth(): void {
      console.log('log : ' + 'Pierre is a bitch ass motherfucker');
    }


}
