window.addEventListener('load', function () {

//INICIA LISTADO DE PACIENTES
    (function(){
      const url = '/pacientes/ListAll';
      const settings = {
        method: 'GET'
      };
      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
      var table = document.getElementById("pacienteTable");

         for(let paciente of data) {
            var pacienteRow =table.insertRow();
            let tr_id = 'tr_' + paciente.id;
            pacienteRow.id = tr_id;
            pacienteRow.innerHTML =
                    '<td class=\"td_id\">' + paciente.id + '</td>' +
                    '<td class=\"td_nombre\">' + paciente.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_apellido\">' + paciente.apellido.toUpperCase() + '</td>' +
                    '<td class=\"td_dni\">' + paciente.dni + '</td>';
         };
      })
      .catch(error => console.error('Error fetching pacientes:', error));
    })();
//INICIA LISTADO DE ODONTOLOGOS
    (function(){
              const url = '/odontologos/ListAll';
              const settings = {
                method: 'GET'
              };
              fetch(url,settings)
              .then(response => response.json())
              .then(data => {
              var table = document.getElementById("odontologoTable");
                 for(let odontologo of data){
                    var odontologoRow =table.insertRow();
                    let tr_id = 'tr_' + odontologo.id;
                    odontologoRow.id = tr_id;
                    odontologoRow.innerHTML =
                            '<td class=\"td_id\">' + odontologo.id + '</td>'+
                            '<td class=\"td_nombre\">' + odontologo.nombre.toUpperCase() + '</td>' +
                            '<td class=\"td_apellido\">' + odontologo.apellido.toUpperCase() + '</td>' +
                            '<td class=\"td_matricula\">' + odontologo.matricula + '</td>';
                };
              })
              .catch(error => console.error('Error fetching odontologos:', error));
            })();

});
