import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class DataService {

  private jsonUrl = 'assets/data/data.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  // Method to fetch data from JSON file
  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
