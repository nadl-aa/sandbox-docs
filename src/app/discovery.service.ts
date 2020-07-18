import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  constructor(private httpclient: HttpClient) { }
  getaccount(id: string): Observable<any>
  {
    return this.httpclient.get('http://localhost:8080/api/v1/account/discovery', { params: new HttpParams().set('id', id)});

  }
  linkaccount(link): Observable<any>
  {
    return this.httpclient.post('http://localhost:8080/api/v1/account/link', link);
  }
  createconsent(consent: any): Observable<any>
  {
    return this.httpclient.post('http://localhost:8080/api/v1/consent/request', consent);
  }
  getconsent(): Observable<any>
  {
    return this.httpclient.get('http://localhost:8080/api/v1/consent/getall');
  }
}

