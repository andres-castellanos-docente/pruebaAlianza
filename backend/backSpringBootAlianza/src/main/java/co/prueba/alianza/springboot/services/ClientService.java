package co.prueba.alianza.springboot.services;

import co.prueba.alianza.springboot.dtos.ClientsDto;
import co.prueba.alianza.springboot.responses.ClientResponse;
import co.prueba.alianza.springboot.responses.ClientsResponse;
import org.springframework.http.ResponseEntity;

public interface ClientService {
    ResponseEntity<ClientResponse> crearEdClient(ClientsDto client);
    ResponseEntity<ClientsResponse> leerClients();
}
