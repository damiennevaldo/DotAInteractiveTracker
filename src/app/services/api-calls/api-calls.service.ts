import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import axios from 'axios';

// ?access_token=M
const BASE_URL = 'https://dota-prediction.herokuapp.com/';
const URL_LAST_RUN = '1.0/model/last-run';
const URL_LIST_ROUTES = '1.0/list-routes';
const URL_GAMES_PREDICTED = '1.0/games-predicted';
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

  constructor(private http: HttpClient) { }

  async callApi(apiUrl: string, parameter?: any | undefined): Promise<any> {
    let uri = BASE_URL + apiUrl;
    if (parameter && parameter.trim()){
      uri += parameter;
   }
    return await axios.get(uri, {
      headers:
        {
          access_token: 'M',
          'Access-Control-Allow-Origin': '*'}
        }
        );
  }
    // Call to list-routes
   async getListroutes(): Promise<any> {
    console.log('log : ' + BASE_URL + URL_LIST_ROUTES);
    try{
    return await this.callApi(URL_LIST_ROUTES);
    } catch (error) {
      return await error;
    }
      // const headers = new HttpHeaders().set('access_token', 'M');
      // console.log(headers);
      // return this.http.get(BASE_URL + URL_LISTE_ROUTES,
      //   {
      //     headers: {
      //       'access_token': 'M',
      //     },
      //   } );
    }

    // Call to games-predicted
    getGamesPredicted(): Promise <any> {
      console.log('log : ' + BASE_URL + URL_GAMES_PREDICTED);
      return this.callApi(URL_GAMES_PREDICTED);
    }

    // Call to predict
    getPredict(matchId: number): Promise <any> {
      console.log('log : ' + BASE_URL + URL_PREDICT);
      return this.callApi(URL_PREDICT, matchId);
    }

    // Call to score
    getScore(maxLine: number): Promise <any> {
      console.log('log : ' + BASE_URL + URL_SCORE);
      return this.callApi(URL_SCORE, maxLine);
    }

    // Call to stats
    getStats(): Promise <any> {
      console.log('log : ' + BASE_URL + URL_STATS);
      return this.callApi(URL_STATS);
    }

    // Call to the truth
    gettheTruth(): void {
      console.log('log : ' + 'Pierre is a bitch ass motherfucker');
    }


}
