package co.prueba.alianza.springboot.responses;


import co.prueba.alianza.springboot.entities.ClientsEntity;

import java.util.List;

public class ClientsResponse extends ResponseGeneralArr {

    List<ClientsEntity> clients;

    public ClientsResponse(Integer responseCode, List<String> responseDescription, List<ClientsEntity> clients, Integer status) {
        setResponseCode(responseCode);
        setResponseDescription(responseDescription);
        setStatus(status);
        setClient(clients);
    }

    public ClientsResponse(Integer responseCode, List<String> responseDescription, Integer status) {
        setResponseCode(responseCode);
        setResponseDescription(responseDescription);
        setStatus(status);
    }

    public List<ClientsEntity> getClients() {
        return clients;
    }

    public void setClient(List<ClientsEntity> clients) {
        this.clients = clients;
    }
}
