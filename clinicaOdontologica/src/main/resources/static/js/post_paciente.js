document.getElementById("add_new_odontologo").onsubmit=function(e) {
          e.preventDefault();
          };

window.addEventListener('load', function () {

    //Al cargar la pagina buscamos y obtenemos el formulario donde estarán
    //los datos que el usuario cargará de el nuevo odontologo
    const formulario = document.querySelector('#add_new_odontologo');

    //Ante un submit del formulario se ejecutará la siguiente funcion
    formulario.addEventListener('submit', function (event) {

       //creamos un JSON que tendrá los datos del nuevo odontologo obtenidos del formulario
        const formData = {
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            dni: document.querySelector('#matricula').value,
            fechaAlta: document.querySelector('#fecha').value,
            domicilio: { calle: document.querySelector('#calle').value,
                         numero: document.querySelector('#numero').value,
                         localidad: document.querySelector('#localidad').value,
                         provincia: document.querySelector('#provincia').value
                         },
        };

        //invocamos utilizando la función fetch la API peliculas con el método POST que guardará
        //al odontologo que enviaremos en formato JSON
        const url = '/pacientes/save';
        const settings = {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData)
        }

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                 //Si no hay ningun error se muestra un mensaje diciendo que odontologo se agrego bien
                 let successAlert = '<div class="alert alert-success alert-dismissible">' +
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<strong>Paciente agregado</strong></div>'

                 document.querySelector('#response').innerHTML = successAlert;
                 document.querySelector('#response').style.display = "block";
                 //llamamos a la función resetear campos vacíos
                 resetUploadForm();
            })

            .catch(error => {
                    //Si hay algun error se muestra un mensaje diciendo que odontologo
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
        document.querySelector('#nombre').value = "";
        document.querySelector('#apellido').value = "";
        document.querySelector('#matricula').value = "";
        document.querySelector('#fecha').value = "";
        document.querySelector('#calle').value = "";
        document.querySelector('#numero').value = "";
        document.querySelector('#localidad').value = "";
        document.querySelector('#provincia').value = "";

    }

    (function(){
        let pathname = window.location.pathname;
        if(pathname === "/"){
            document.querySelector(".nav .nav-item a:first").addClass("active");
        } else if (pathname == "/pacienteList.html") {
            document.querySelector(".nav .nav-item a:last").addClass("active");
        }
    })();
});