document.getElementById("add_new_turno").onsubmit=function(e) {
          e.preventDefault();
          };

window.addEventListener('load', function () {
    const formulario = document.querySelector('#add_new_turno');
    //Ante un submit del formulario se ejecutará la siguiente funcion
    formulario.addEventListener('submit', function (event) {
       //creamos un JSON que tendrá los datos del nuevo turno obtenido del formulario
        const formData = {
            odontologo: { id: document.querySelector('#id_odontologo').value },
            paciente: { id: document.querySelector('#id_paciente').value },
            fecha: document.querySelector('#fecha').value,
        };
        //invocamos utilizando la función fetch la API con el método POST que guardará
        //al dato que enviaremos en formato JSON
        const url = '/turnos/save';
        const settings = {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData)
        }
        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                 //Si no hay ningun error se muestra un mensaje diciendo que turno se agrego bien
                 let successAlert = '<div class="alert alert-success alert-dismissible">' +
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<strong>Turno agregado</strong></div>'
                 document.querySelector('#response').innerHTML = successAlert;
                 document.querySelector('#response').style.display = "block";
                 //llamamos a la función resetear campos vacíos
                 resetUploadForm();
            })
            .catch(error => {
                    //Si hay algun error se muestra un mensaje diciendo que turno
                    //no se pudo guardar y se intente nuevamente
                    let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                     '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                     '<strong>Error intente nuevamente</strong></div>'
                      document.querySelector('#response').innerHTML = errorAlert;
                      document.querySelector('#response').style.display = "block";
                     //llamamos a la función resetear campos vacíos
                     resetUploadForm();
                     })
    });
    //Function que resetea los campos a vaciós para agregar otro registro
    function resetUploadForm(){
        document.querySelector('#id_paciente').value = "";
        document.querySelector('#id_odontologo').value = "";
        document.querySelector('#fecha').value = "";
    }
});