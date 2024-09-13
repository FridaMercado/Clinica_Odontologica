package com.dh.clinicaOdontologica.service.impl;
import com.dh.clinicaOdontologica.entity.Paciente;
import com.dh.clinicaOdontologica.repository.IPacienteRepository;
import com.dh.clinicaOdontologica.service.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteServiceImpl implements IPacienteService {
    @Autowired
    private IPacienteRepository iPacienteRepo;

    @Override
    public Paciente save(Paciente paciente) {
        return iPacienteRepo.save(paciente);
    }
    @Override
    public Paciente searchById(Long id) {
        Optional<Paciente> pacienteSearched = iPacienteRepo.findById(id);
        if(pacienteSearched.isPresent())  {
            return pacienteSearched.get();
        } else {
            return null;
        }
    }
    @Override
    public List<Paciente> listAll() {
        return iPacienteRepo.findAll();
    }
    @Override
    public void update(Paciente paciente) {
        iPacienteRepo.save(paciente);
    }
    @Override
    public void delete(Long id) {
        iPacienteRepo.deleteById(id);
    }
    @Override
    public Paciente searchByDNI(String dni) {
        return iPacienteRepo.findByDNI(dni);
    }
}