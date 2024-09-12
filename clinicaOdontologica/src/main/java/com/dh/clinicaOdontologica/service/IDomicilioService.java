package com.dh.clinicaOdontologica.service;

import com.dh.clinicaOdontologica.entity.Domicilio;
import com.dh.clinicaOdontologica.entity.Turno;

import java.util.List;
import java.util.Optional;

public interface IDomicilioService {
    Domicilio save(Domicilio domicilio);
    Optional<Domicilio> searchById(Long id);
    void update(Domicilio domicilio);
    void delete(Long id);
}
