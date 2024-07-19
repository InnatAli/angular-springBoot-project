import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private userBaseUrl = 'http://localhost:8080/api/users';
  private adminBaseUrl = 'http://localhost:8080/api/admins'; 
  private apiUrl = 'http://localhost:8080/api/users'; 

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.userBaseUrl}/register`, user, { headers });
  }

  login(loginData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.userBaseUrl}/login`, loginData, { headers });
  }

  adminLogin(loginData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.adminBaseUrl}/adminlogin`, loginData, { headers });
  }


  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

