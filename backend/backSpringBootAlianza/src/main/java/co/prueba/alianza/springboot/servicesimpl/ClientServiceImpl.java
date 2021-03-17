package co.prueba.alianza.springboot.servicesimpl;

import co.prueba.alianza.springboot.dtos.ClientsDto;
import co.prueba.alianza.springboot.entities.*;
import co.prueba.alianza.springboot.repository.ClientsRepository;
import co.prueba.alianza.springboot.responses.ClientResponse;
import co.prueba.alianza.springboot.responses.ClientResponseDto;
import co.prueba.alianza.springboot.responses.ClientsResponse;
import co.prueba.alianza.springboot.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Lazy
@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientsRepository clientsRepository;

    @Value("${dateFormat}")
    private String format;


    @Override
    public ResponseEntity<ClientResponse> crearEdClient(ClientsDto client) {
        List<String> listMess = new ArrayList<>();

        try {
            ClientsEntity clientsEntity = new ClientsEntity();
            if (Objects.isNull(client.getId())==false){
                clientsEntity.setId(client.getId());
            }

            clientsEntity.setEmail(client.getEmail());
            clientsEntity.setName(client.getName());
            clientsEntity.setPhone(client.getPhone());
            clientsEntity.setSharedkey(client.getSharedkey());
            clientsEntity.setStartdate(client.getStartdate());
            clientsEntity.setEnddate(client.getEnddate());
            clientsEntity.setSavedate( new Date());
            ClientsEntity clientSaved = clientsRepository.save(clientsEntity);
            ClientResponseDto clientResponseDto = new ClientResponseDto(clientSaved);

            return new ResponseEntity<>(new ClientResponse(1, listMess, clientResponseDto, HttpStatus.OK.value()), HttpStatus.OK);


        }
        catch (Exception e) {
            listMess.add("Ocurrio un error al guardar el Cliente");
            return new ResponseEntity<>(new ClientResponse(-1, listMess, HttpStatus.INTERNAL_SERVER_ERROR.value()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<ClientsResponse> leerClients() {
        List<String> listMess = new ArrayList<>();
        try {
            listMess.add("Se leyeron todos los Clientes Ok");
            return new ResponseEntity<>(new ClientsResponse(1, listMess, clientsRepository.findAll(), HttpStatus.OK.value()), HttpStatus.OK);
        }
        catch (Exception e) {
                listMess.add("Ocurrio un error al leer los Clientes");
                return new ResponseEntity<>(new ClientsResponse(-1, listMess, HttpStatus.INTERNAL_SERVER_ERROR.value()), HttpStatus.INTERNAL_SERVER_ERROR);
            }

    }
}
