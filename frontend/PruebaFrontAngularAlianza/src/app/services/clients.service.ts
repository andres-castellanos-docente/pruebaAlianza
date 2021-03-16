import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PaisesModel} from '../models/paises.model';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    constructor( private http: HttpClient) {
    }
    path = 'api/servicios/clients';
    crearCliente(request: PaisesModel): Observable<any> {
        return this.http.post(environment.apiUrl + this.path, request, {});
    }

    listarClients(): Observable<any> {
        return this.http.get(environment.apiUrl + this.path, {});
    }

    editarCliente(request: PaisesModel): Observable<any> {
      return this.http.put(environment.apiUrl + this.path, request, {});
    }
    eliminarCliente(indexElim: number): Observable<any> {
      return this.http.delete(environment.apiUrl + this.path + '/' + indexElim.toString(), {});
    }
}
