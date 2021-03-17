package co.prueba.alianza.springboot.responses;

import co.prueba.alianza.springboot.entities.ClientsEntity;

import java.util.Date;

public class ClientResponseDto {
    public ClientResponseDto(ClientsEntity clientsEntity) {
        setId(clientsEntity.getId());
        setName(clientsEntity.getName());
        setEmail(clientsEntity.getEmail());
        setEnddate(clientsEntity.getEnddate());
        setPhone(clientsEntity.getPhone());
        setSavedate(clientsEntity.getSavedate());
        setStartdate(clientsEntity.getStartdate());
        setSharedkey(clientsEntity.getSharedkey());
    }
    private Long id;
    private String name;
    private String phone;
    private String email;
    private String sharedkey;
    private Date startdate;
    private Date enddate;
    private Date savedate;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSharedkey() {
        return sharedkey;
    }

    public void setSharedkey(String sharedkey) {
        this.sharedkey = sharedkey;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public Date getSavedate() {
        return savedate;
    }

    public void setSavedate(Date savedate) {
        this.savedate = savedate;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
