package com.dh.clinicaOdontologica.service.impl;
import com.dh.clinicaOdontologica.entity.Turno;
import com.dh.clinicaOdontologica.repository.ITurnoRepository;
import com.dh.clinicaOdontologica.service.ITurnoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurnoServiceImpl implements ITurnoService {
    @Autowired
    private ITurnoRepository iTurnoRepo;
    @Override
    public Turno save(Turno turno) {
        return iTurnoRepo.save(turno);
    }
    @Override
    public Turno searchById(Long id) {
        Optional<Turno> turnoBuscado =  iTurnoRepo.findById(id);
        return turnoBuscado.orElse(null);
    }
    @Override
    public List<Turno> listAll() {
        return iTurnoRepo.findAll();
    }
    @Override
    public void update(Turno turno) {
        iTurnoRepo.save(turno);
    }
    @Override
    public void delete(Long id) {
        iTurnoRepo.deleteById(id);
    }
}
