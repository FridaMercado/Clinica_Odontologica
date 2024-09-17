window.addEventListener('load', function () {
    (function(){
      const url = '/pacientes/ListAll';
      const settings = {
        method: 'GET'
      }
      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
      //recorremos la colección de odontologos del JSON
        console.log(data);
         for(paciente of data){
            //por cada odontologo armaremos una fila de la tabla
            //cada fila tendrá un id que luego nos permitirá borrar la fila si eliminamos el registro
            var table = document.getElementById("pacienteTable");
            var pacienteRow =table.insertRow();
            let tr_id = 'tr_' + paciente.id;
            pacienteRow.id = tr_id;
            //creamos boton DELETE que agregaremos en cada fila para poder eliminar la misma
            //el botón invocara a la funcion de JS deleteByKey que se encargará
            //de llamar a la API para eliminar el registro ESTO SE CONFIGURA EN EL JS DE DELETE
            let deleteButton = '<button' +
                                      ' id=' + '\"' + 'btn_delete_' + paciente.id + '\"' +
                                      ' type="button" onclick="deleteBy('+paciente.id+')" class="btn btn-danger btn_delete">' +
                                      '&times' +
                                      '</button>';
            //creamos un boton MOSTRAR ID y que al hacerle clic invocará
            //a la función de JS findBy que se encargará de buscar EL REGISTRO que queremos
            //modificar y mostrar los datos del mismo en un formulario.
            let updateButton = '<button' +
                                      ' id=' + '\"' + 'btn_id_' + paciente.id + '\"' +
                                      ' type="button" onclick="findBy('+paciente.id+')" class="btn btn-info btn_id">' +
                                      paciente.id +
                                      '</button>';
            //armamos cada columna de la fila
            //como primer columna pondremos el boton modificar
            //luego los datos de la pelicula
            //como ultima columna el boton eliminar
            pacienteRow.innerHTML =
                    '<td>' + updateButton + '</td>' +
                    '<td class=\"td_nombre\">' + paciente.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_apellido\">' + paciente.apellido.toUpperCase() + '</td>' +
                    '<td class=\"td_matricula\">' + paciente.dni + '</td>' +
                    '<td class=\"td_fecha\">' + paciente.fechaAlta + '</td>' +
                    '<td class=\"td_calle\">' + paciente.domicilio.calle + '</td>' +
                    '<td class=\"td_numero\">' + paciente.domicilio.numero + '</td>' +
                    '<td class=\"td_provincia\">' + paciente.domicilio.provincia + '</td>' +
                    '<td class=\"td_fecha\">' + paciente.domicilio.localidad + '</td>' +
                    '<td>' + deleteButton + '</td>';
        };
    })
    })

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/pacienteList.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })
    })