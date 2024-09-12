package com.dh.clinicaOdontologica.service.impl;

import com.dh.clinicaOdontologica.entity.Domicilio;
import com.dh.clinicaOdontologica.repository.IDomicilioRepository;
import com.dh.clinicaOdontologica.service.IDomicilioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DomicilioServiceImpl implements IDomicilioService {

    @Autowired
    private IDomicilioRepository iDomicilioRepo;
    @Override
    public Domicilio save(Domicilio domicilio) {
        return iDomicilioRepo.save(domicilio);
    }
    @Override
    public Optional<Domicilio> searchById(Long id) {
        return Optional.empty();
    }
    @Override
    public void update(Domicilio domicilio) {
        iDomicilioRepo.save(domicilio);
    }
    @Override
    public void delete(Long id) {
        iDomicilioRepo.deleteById(id);
    }
}
