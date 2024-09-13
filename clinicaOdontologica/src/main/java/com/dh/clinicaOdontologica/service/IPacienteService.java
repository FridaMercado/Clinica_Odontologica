package com.dh.clinicaOdontologica.service;
import com.dh.clinicaOdontologica.entity.Paciente;
import java.util.List;

public interface IPacienteService {
    Paciente save(Paciente paciente);
    Paciente searchById(Long id);
    List<Paciente> listAll();
    void update(Paciente paciente);
    void delete(Long id);
    Paciente searchByDNI(String dni);
}
