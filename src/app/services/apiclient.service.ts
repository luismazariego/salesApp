import { Client } from './../models/client';
import { Response } from './../models/response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root',
})
export class ApiclientService {
  url = 'https://localhost:44321/api/client';

  constructor(private http: HttpClient) { }
  
  getClients(): Observable<Response>{
    return this.http.get<Response>(this.url);
  }

  addClient(client: Client): Observable<Response> {
    return this.http.post<Response>(this.url, client, httpOptions);
  }
}
