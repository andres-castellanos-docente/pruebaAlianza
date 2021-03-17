package co.prueba.alianza.springboot.responses;


import java.util.List;

public class ClientResponse extends ResponseGeneralArr {

    ClientResponseDto client;

    public ClientResponse(Integer responseCode, List<String> responseDescription, ClientResponseDto client, Integer status) {
        setResponseCode(responseCode);
        setResponseDescription(responseDescription);
        setStatus(status);
        setClient(client);
    }

    public ClientResponse(Integer responseCode, List<String> responseDescription, Integer status) {
        setResponseCode(responseCode);
        setResponseDescription(responseDescription);
        setStatus(status);
    }

    public ClientResponseDto getClient() {
        return client;
    }

    public void setClient(ClientResponseDto client) {
        this.client = client;
    }
}
