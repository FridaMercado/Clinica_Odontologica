package com.dh.clinicaOdontologica.controller;

import com.dh.clinicaOdontologica.entity.Paciente;
import com.dh.clinicaOdontologica.service.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {
    @Autowired
    private IPacienteService pacienteServ;
    @PostMapping("/save")
    public ResponseEntity<?> postPaciente(@RequestBody Paciente paciente) {
        return ResponseEntity.ok(pacienteServ.save(paciente));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getByIdPaciente(@PathVariable Long id) {
        return ResponseEntity.ok(pacienteServ.searchById(id));
    }
    @GetMapping("/ListAll")
    public ResponseEntity<List<?>> getAllPacientes() {
        return ResponseEntity.ok(pacienteServ.listAll());
    }
    @PutMapping("/update")
    public ResponseEntity<?> putPaciente(@RequestBody Paciente paciente) {
        if(pacienteServ.searchById(paciente.getId())==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {pacienteServ.update(paciente);
           return ResponseEntity.ok(HttpStatus.OK);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePaciente(@PathVariable Long id) {
        if(pacienteServ.searchById(id)==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {pacienteServ.delete(id);
            return ResponseEntity.ok(HttpStatus.NO_CONTENT);
        }
    }
}
