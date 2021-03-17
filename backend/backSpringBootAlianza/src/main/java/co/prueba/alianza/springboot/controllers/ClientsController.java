package co.prueba.alianza.springboot.controllers;

import co.prueba.alianza.springboot.dtos.ClientsDto;
import co.prueba.alianza.springboot.responses.ClientResponse;
import co.prueba.alianza.springboot.responses.ClientsResponse;
import co.prueba.alianza.springboot.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/servicios")
public class ClientsController {

    @Lazy
    @Autowired
    ClientService clientService;

    @PostMapping("/clients")
    public ResponseEntity<ClientResponse>  addClient(@RequestBody ClientsDto client)
    {
       return clientService.crearEdClient(client);
    }

    @GetMapping("/clients")
    public ResponseEntity<ClientsResponse>  getClient()
    {
        return clientService.leerClients();
    }


    @GetMapping("/clients/{sharedkey}")
    public ResponseEntity<ClientsResponse>  getClientByShared(@PathVariable(value = "sharedkey") String sharedKey)
    {
        return clientService.leerClientsPorShared(sharedKey);
    }



    @PutMapping("/clients")
    public ResponseEntity<ClientResponse>  modClient(@RequestBody ClientsDto client)
    {
        return clientService.crearEdClient(client);
    }



}

