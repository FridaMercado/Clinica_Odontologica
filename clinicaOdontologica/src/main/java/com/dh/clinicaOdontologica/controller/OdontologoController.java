package com.dh.clinicaOdontologica.controller;

import com.dh.clinicaOdontologica.entity.Odontologo;
import com.dh.clinicaOdontologica.service.IOdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/odontologos")
public class OdontologoController {
    @Autowired
    private IOdontologoService odontologoServ;
    @PostMapping("/save")
    public ResponseEntity<?> postOdontologo(@RequestBody Odontologo odontologo) {
        return ResponseEntity.ok(odontologoServ.save(odontologo));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getByIdOdontologo(@PathVariable Long id) {
        return ResponseEntity.ok(odontologoServ.searchById(id));
    }
    @GetMapping("/matricula/{matricula}")
    public ResponseEntity<?> getByMatriculaOdontologo(@PathVariable String matricula) {
        return ResponseEntity.ok(odontologoServ.searchByMatricula(matricula));
    }
    @GetMapping("/ListAll")
    public ResponseEntity<List<?>> getAllOdontologos() {
        return ResponseEntity.ok(odontologoServ.listAll());
    }
    @PutMapping("/update")
    public ResponseEntity<?> putOdontologo(@RequestBody Odontologo odontologo) {
        if(odontologoServ.searchById(odontologo.getId())==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {odontologoServ.update(odontologo);
           return ResponseEntity.ok(HttpStatus.OK);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOdontologo(@PathVariable Long id) {
        if(odontologoServ.searchById(id)==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {odontologoServ.delete(id);
            return ResponseEntity.ok(HttpStatus.NO_CONTENT);
        }
    }
}
