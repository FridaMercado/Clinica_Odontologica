package com.dh.clinicaOdontologica.repository;
import com.dh.clinicaOdontologica.entity.Odontologo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IOdontologoRepository extends JpaRepository<Odontologo, Long> {

    @Query("SELECT o FROM Odontologo o WHERE o.matricula = ?1")
    Odontologo findByMatricula(String matricula);

    @Query("SELECT o FROM Odontologo o WHERE o.nombre = ?1 AND o.apellido =?2")
    Optional<Odontologo> findByLastNameAndFirstName(String lastName, String firstName);
}