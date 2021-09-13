import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private http:HttpClient) { }
  getGameList(
    ordering:string,
    search?:string
  ):Observable<APIResponse<Game>>{
let params=new HttpParams();

return this.http.get<APIResponse<Game>>(`${env.BASE_URL}`,{
  params:params,

});
  }
 
}
