package com.dh.clinicaOdontologica.service;
import com.dh.clinicaOdontologica.entity.Odontologo;
import com.dh.clinicaOdontologica.service.IOdontologoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OdontologoServiceImplTest {
    @Autowired
    private IOdontologoService odontologoService;

    @Test
    public void testSaveMethod(){
        //ARRANGE
        Odontologo odontologo1 = new Odontologo("Frida","Mercado","abc001");
        //ACT
        odontologoService.save(odontologo1);
        Odontologo odontologoFrida = odontologoService.searchByMatricula("abc001");
        //ASSERT
        assertNotNull(odontologoFrida);
    }

    @Test
    public void testUpdateMethod(){
        //ARRANGE
        Odontologo odontologo2 = new Odontologo("Frida","Mercado","abc002");
        odontologoService.save(odontologo2);
        //ACT
        odontologo2.setApellido("Miranda");
        odontologoService.update(odontologo2);
        Odontologo odontologoUpdated = odontologoService.searchByMatricula("abc002");
        //ASSERT
        assertEquals("Miranda",odontologoUpdated.getApellido());
    }

    @Test
    public void testListMethod(){
        //ARRANGE
        Odontologo odontologo3 = new Odontologo("Daniela","Cordova","abc003");
        Odontologo odontologo4 = new Odontologo("Cristian","Franco","abc004");
        odontologoService.save(odontologo3);
        odontologoService.save(odontologo4);

        //ACT
        List<Odontologo> odontologosList = odontologoService.listAll();

        //ASSERT
        assertFalse(odontologosList.isEmpty());
    }

    @Test
    public void testDeleteMethod(){
        //ARRANGE
        Odontologo odontologo5 = new Odontologo("Frida","Cordova","abc005");
        Odontologo odontologo6 = new Odontologo("Cristian","Franco","abc006");
        Odontologo odontologo7 = new Odontologo("Vanina","Godoy","abc007");
        odontologoService.save(odontologo5);
        odontologoService.save(odontologo6);
        odontologoService.save(odontologo7);

        //ACT
        odontologoService.delete(7L);
        Odontologo odontologoDeleted = odontologoService.searchById(7L);

        //ASSERT
        assertEquals(null, odontologoDeleted);
    }

}