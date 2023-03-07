import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SituationService {
  
  constructor(private http: HttpClient) { }

  public pcSituationSheet(startDateValue : string ,endDateValue : string){
    return this.http.get(environment.backendHost+"/pcSituationSheet?dateD="+startDateValue+"&dateF="+endDateValue);
  }
  public pcSituationTotal(startDateValue: string ,endDateValue : string){
    return this.http.get(environment.backendHost+"/pcSituationTotal?dateD="+startDateValue+"&dateF="+endDateValue);
  }

  getJsonData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

}
