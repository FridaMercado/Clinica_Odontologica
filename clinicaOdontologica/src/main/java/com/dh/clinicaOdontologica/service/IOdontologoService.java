package com.dh.clinicaOdontologica.service;

import com.dh.clinicaOdontologica.entity.Odontologo;
import com.dh.clinicaOdontologica.entity.Paciente;

import java.util.List;
import java.util.Optional;

public interface IOdontologoService {
    Odontologo save(Odontologo odontologo);
    Odontologo searchById(Long id);
    List<Odontologo> listAll();
    void update(Odontologo odontologo);
    void delete(Long id);
    Odontologo searchByMatricula(String matricula);
}
