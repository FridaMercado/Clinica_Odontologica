window.addEventListener('load', function () {
console.log("inicio");
    (function(){
      const url = '/turnos/ListAll';
      const settings = {
        method: 'GET'
      }
      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
      console.log("data ",data);
      var table = document.getElementById("turnoTable");
         for(let turno of data){
            var turnoRow =table.insertRow();
            let tr_id = 'tr_' + turno.id;
            turnoRow.id = tr_id;
            //creamos boton DELETE que agregaremos en cada fila para poder eliminar la misma
            //el botón invocara a la funcion de JS deleteByKey que se encargará
            //de llamar a la API para eliminar el registro ESTO SE CONFIGURA EN EL JS DE DELETE
            let deleteButton = '<button' +
                                      ' id=' + '\"' + 'btn_delete_' + turno.id + '\"' +
                                      ' type="button" onclick="deleteBy('+turno.id+')" class="btn btn-danger btn_delete">' +
                                      '&times' +
                                      '</button>';
            //creamos un boton MOSTRAR ID y que al hacerle clic invocará
            //a la función de JS findBy que se encargará de buscar EL REGISTRO que queremos
            //modificar y mostrar los datos del mismo en un formulario.
            let updateButton = '<button' +
                                      ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                                      ' type="button" onclick="findBy('+turno.id+')" class="btn btn-info btn_id">' +
                                      turno.id +
                                      '</button>';
            //armamos cada columna de la fila
            //como primer columna pondremos el boton modificar
            //luego los datos
            //como ultima columna el boton eliminar
            turnoRow.innerHTML =
                    '<td>' + updateButton + '</td>' +
                    '<td class=\"td_nombre\">' + turno.paciente.nombre + " " + turno.paciente.apellido +  '</td>' +
                    '<td class=\"td_id\">' + turno.paciente.id + '</td>' +
                    '<td class=\"td_nombre\">'  + turno.odontologo.nombre + " " + turno.odontologo.apellido +  '</td>' +
                    '<td class=\"td_id\">' + turno.odontologo.id + '</td>' +
                    '<td class=\"td_fecha\">' + turno.fecha + '</td>' +
                    '<td>' + deleteButton + '</td>';
        };
    })
    })();
});