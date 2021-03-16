import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {LoginModel} from '../models/login.model';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor( private http: HttpClient) {
    }
    iniciarSesion(request: LoginModel): Observable<any> {
        return this.http.post(environment.apiUrl + environment.urlLogin, request, {}).pipe(
          catchError((err) => {
            return throwError(err);
          })
        );
    }
}
