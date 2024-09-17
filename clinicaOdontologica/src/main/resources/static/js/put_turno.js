window.addEventListener('load', function () {

    const formulario = document.querySelector('#update_turno_form');

    formulario.addEventListener('submit', function (event) {
        let turnoId = document.querySelector('#turno_id').value;
        const formData = {
                            id: turnoId,
                            paciente: {
                                      id: document.querySelector('#paciente_id').value
                                      },
                            odontologo: {
                                       id: document.querySelector('#odontologo_id').value
                                       },
                            fecha: document.querySelector('#fecha').value
                            };
        //invocamos función fetch en la API odontologos con el método PUT que modificará el registro que enviaremos en formato JSON
        const url = '/turnos/update';
        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }
          fetch(url,settings)
          .then(response => response.json())
    })
 })
    //Es la funcion que se invoca cuando se hace click sobre el id de un odontólogo del listado
    //se encarga de llenar el formulario con los datos del odontólogo
    //que se desea modificar
    function findBy(id) {
          const url = '/turnos/'+id;
          const settings = {
              method: 'GET'
          }
          fetch(url,settings)
          .then(response => response.json())
          .then(data => {
              let turno = data;
              document.querySelector('#turno_id').value = turno.id;
              document.querySelector('#paciente_id').value = turno.paciente.id;
              document.querySelector('#odontologo_id').value = turno.odontologo.id;
              document.querySelector('#fecha').value = turno.fecha;
              //el formulario por default esta oculto y al editar se habilita
              document.querySelector('#div_turno_updating').style.display = "block";
          }).catch(error => {
              alert("Error: " + error);
            })
    }