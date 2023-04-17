import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  private api_url = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  public get<T>(url: string, params?: any): Observable<T> {
    console.log(`${this.api_url}/${url}`,params)
    return this.http.get<T>(`${this.api_url}/${url}`, { params });
  }

  public post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.api_url}/${url}`, data);
  }

  public put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.api_url}/${url}`, data);
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.api_url}/${url}`);
  }
}
