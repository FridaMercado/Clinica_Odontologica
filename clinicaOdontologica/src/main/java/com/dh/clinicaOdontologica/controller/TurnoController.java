package com.dh.clinicaOdontologica.controller;
import com.dh.clinicaOdontologica.entity.Turno;
import com.dh.clinicaOdontologica.service.ITurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turnos")
public class TurnoController {
    @Autowired
    private ITurnoService turnoServ;
    @PostMapping("/save")
    public ResponseEntity<?> postTurno(@RequestBody Turno turno) {
        return ResponseEntity.ok(turnoServ.save(turno));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getByIdTurno(@PathVariable Long id) {
        return ResponseEntity.ok(turnoServ.searchById(id));
    }
    @GetMapping("/ListAll")
    public ResponseEntity<List<?>> getAllTurnos() {
        return ResponseEntity.ok(turnoServ.listAll());
    }
    @PutMapping("/update")
    public ResponseEntity<?> putTurno(@RequestBody Turno turno) {
        if(turnoServ.searchById(turno.getId())==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {turnoServ.update(turno);
           return ResponseEntity.ok(HttpStatus.OK);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTurno(@PathVariable Long id) {
        if(turnoServ.searchById(id)==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {turnoServ.delete(id);
            return ResponseEntity.ok(HttpStatus.NO_CONTENT);
        }
    }
}
