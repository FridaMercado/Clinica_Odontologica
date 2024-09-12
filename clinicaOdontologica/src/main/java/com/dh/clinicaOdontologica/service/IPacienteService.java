package com.dh.clinicaOdontologica.service;
import com.dh.clinicaOdontologica.entity.Paciente;

import java.util.List;
import java.util.Optional;

public interface IPacienteService {
    Paciente save(Paciente paciente);
    Paciente searchById(Long id);
    List<Paciente> listAll();
    void update(Paciente paciente);
    void delete(Long id);
}
