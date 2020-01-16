import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'c4af6f307d1b410aa228cffd2cf17aaf';

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

  constructor(private httpClient: HttpClient) { }
}
