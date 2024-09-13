window.addEventListener('load', function () {

    //Buscamos y obtenemos el formulario donde estan
    //los datos que el usuario pudo haber modificado del odontologo
    const formulario = document.querySelector('#update_odontologo_form');

    formulario.addEventListener('submit', function (event) {
        let OdotologoId = document.querySelector('#odontologo_id').value;
        //creamos un JSON que tendrá los datos del odontólogo
        //a diferencia de un odontólogo nuevo en este caso enviamos el id
        //para poder identificarlo y modificarlo para no cargarlo como  un nuevo regsistro
        const formData = {
            id: document.querySelector('#odontologo_id').value,
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            matricula: document.querySelector('#matricula').value,

        };

        //invocamos función fetch en la API odontologos con el método PUT que modificará el registro que enviaremos en formato JSON
        const url = '/odontologos/update';
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
          const url = '/odontologos/'+id;
          const settings = {
              method: 'GET'
          }
          fetch(url,settings)
          .then(response => response.json())
          .then(data => {
              let odontologo = data;
              document.querySelector('#odontologo_id').value = odontologo.id;
              document.querySelector('#nombre').value = odontologo.nombre;
              document.querySelector('#apellido').value = odontologo.apellido;
              document.querySelector('#matricula').value = odontologo.matricula;
              //el formulario por default esta oculto y al editar se habilita
              document.querySelector('#div_odontologo_updating').style.display = "block";
          }).catch(error => {
              alert("Error: " + error);
          })
      }