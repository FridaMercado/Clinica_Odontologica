package com.dh.clinicaOdontologica.service;
import com.dh.clinicaOdontologica.entity.Odontologo;
import java.util.List;

public interface IOdontologoService {
    Odontologo save(Odontologo odontologo);
    Odontologo searchById(Long id);
    List<Odontologo> listAll();
    void update(Odontologo odontologo);
    void delete(Long id);
    Odontologo searchByMatricula(String matricula);
    Odontologo searchByLastNameAndFirstName(String nombre, String apellido);
}
