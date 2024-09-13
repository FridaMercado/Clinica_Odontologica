package com.dh.clinicaOdontologica.service.impl;
import com.dh.clinicaOdontologica.entity.Odontologo;
import com.dh.clinicaOdontologica.exception.ResourceNotFoundException;
import com.dh.clinicaOdontologica.repository.IOdontologoRepository;
import com.dh.clinicaOdontologica.service.IOdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OdontologoServiceImpl implements IOdontologoService {
    @Autowired
    private IOdontologoRepository iOdontologoRepo;
    @Override
    public Odontologo save(Odontologo odontologo) {
        return iOdontologoRepo.save(odontologo);
    }
    @Override
    public Odontologo searchById(Long id) throws ResourceNotFoundException {
        Optional<Odontologo> odontologoSearched = iOdontologoRepo.findById(id);
        if (odontologoSearched.isPresent()){
            return odontologoSearched.get();
        }else {
            throw new ResourceNotFoundException("No se encontró el odontólogo con id " + id);
        }
    }
    @Override
    public List<Odontologo> listAll() {
        return iOdontologoRepo.findAll();
    }
    @Override
    public void update(Odontologo odontologo) {
        iOdontologoRepo.save(odontologo);
    }
    @Override
    public void delete(Long id) {
        iOdontologoRepo.deleteById(id);
    }
    @Override
    public Odontologo searchByMatricula(String matricula) {
        return iOdontologoRepo.findByMatricula(matricula);
    }
    @Override
    public Odontologo searchByLastNameAndFirstName(String nombre, String apellido) throws ResourceNotFoundException {
        Optional<Odontologo> odontologoSearched = iOdontologoRepo.findByLastNameAndFirstName(nombre,apellido);
        if (odontologoSearched.isPresent()){
            return odontologoSearched.get();
        }else {
            throw new ResourceNotFoundException("No se encontró el odontólogo con nombre: " + nombre + " o apellido: " + apellido);
        }
    }
}



