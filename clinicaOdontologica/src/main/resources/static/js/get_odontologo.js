window.addEventListener('load', function () {
    (function(){
      const url = '/odontologos/ListAll';
      const settings = {
        method: 'GET'
      }
      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
      //recorremos la colección de odontologos del JSON
        console.log(data);
         for(odontologo of data){
            //por cada odontologo armaremos una fila de la tabla
            //cada fila tendrá un id que luego nos permitirá borrar la fila si eliminamos el registro
            var table = document.getElementById("odontologoTable");
            var odontologoRow =table.insertRow();
            let tr_id = 'tr_' + odontologo.id;
            odontologoRow.id = tr_id;
            //creamos boton DELETE que agregaremos en cada fila para poder eliminar la misma
            //el botón invocara a la funcion de JS deleteByKey que se encargará
            //de llamar a la API para eliminar el registro ESTO SE CONFIGURA EN EL JS DE DELETE
            let deleteButton = '<button' +
                                      ' id=' + '\"' + 'btn_delete_' + odontologo.id + '\"' +
                                      ' type="button" onclick="deleteBy('+odontologo.id+')" class="btn btn-danger btn_delete">' +
                                      '&times' +
                                      '</button>';
            //creamos un boton MOSTRAR ID y que al hacerle clic invocará
            //a la función de JS findBy que se encargará de buscar EL REGISTRO que queremos
            //modificar y mostrar los datos del mismo en un formulario.
            let updateButton = '<button' +
                                      ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                                      ' type="button" onclick="findBy('+odontologo.id+')" class="btn btn-info btn_id">' +
                                      odontologo.id +
                                      '</button>';
            //armamos cada columna de la fila
            //como primer columna pondremos el boton modificar
            //luego los datos de la pelicula
            //como ultima columna el boton eliminar
            odontologoRow.innerHTML =
                    '<td>' + updateButton + '</td>' +
                    '<td class=\"td_nombre\">' + odontologo.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_apellido\">' + odontologo.apellido.toUpperCase() + '</td>' +
                    '<td class=\"td_matricula\">' + odontologo.matricula + '</td>' +
                    '<td>' + deleteButton + '</td>';
        };
    })
    })

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/odontologosList.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })
    })