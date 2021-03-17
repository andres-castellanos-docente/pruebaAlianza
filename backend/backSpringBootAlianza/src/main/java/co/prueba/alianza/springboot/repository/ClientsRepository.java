package co.prueba.alianza.springboot.repository;

import co.prueba.alianza.springboot.entities.ClientsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientsRepository extends JpaRepository<ClientsEntity, Long> {
	Optional<ClientsEntity> findByName(String username);
}
