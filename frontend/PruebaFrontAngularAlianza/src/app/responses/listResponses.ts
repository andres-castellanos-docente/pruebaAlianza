import {ClientModel} from '../models/client.model';

export interface CreatePaisResponse {
    responseCode: number;
    client: Array<ClientModel>;
    responseDescription: string;
}
export interface LoginResponse {
  username: string;
  email: string;
  tokenType: string;
  accessToken: string;
}
