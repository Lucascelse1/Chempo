const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_ooqaes4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      console.log('Sent!');
      document.getElementById('form').reset(); // Reiniciar el formulario
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

// Obtener los checkboxes por su nombre y asignar función al evento change
const checkboxes = document.getElementsByName('check_id');
const contactMethod = []; // Array para almacenar los métodos de contacto seleccionados

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Verificar si el checkbox está seleccionado
    if (this.checked) {
      // Obtener el texto del label asociado al checkbox
      const label = this.nextElementSibling;
      const labelText = label.value;

      // Almacenar el método de contacto en el array
      contactMethod.push(labelText);
    } else {
      // Si el checkbox se deselecciona, remover el método de contacto del array
      const label = this.nextElementSibling;
      const labelText = label.value;
      const index = contactMethod.indexOf(labelText);
      if (index !== -1) {
        contactMethod.splice(index, 1);
      }
    }
  });
});
