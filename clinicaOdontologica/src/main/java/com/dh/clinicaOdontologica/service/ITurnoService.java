package com.dh.clinicaOdontologica.service;
import com.dh.clinicaOdontologica.entity.Turno;

import java.util.List;
import java.util.Optional;

public interface ITurnoService {
    Turno save(Turno turno);
    Turno searchById(Long id);
    List<Turno> listAll();
    void update(Turno turno);
    void delete(Long id);
}
