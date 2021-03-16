import {PaisesModel} from '../models/paises.model';

export interface CreatePaisResponse {
    responseCode: number;
    pais: Array<PaisesModel>;
    responseDescription: string;
}
export interface LoginResponse {
  username: string;
  email: string;
  tokenType: string;
  accessToken: string;
}
