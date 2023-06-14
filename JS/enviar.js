const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_ooqaes4';

  // Obtener todos los elementos de radio button del formulario
  const contactMethods = document.getElementsByName('contact_method');
  let selectedMethod = '';

  // Encontrar el método seleccionado
  for (const method of contactMethods) {
    if (method.checked) {
      selectedMethod = method.value;
      break;
    }
  }

  // Agregar el valor seleccionado al objeto de datos del formulario
  const formData = {
    from_name: this.from_name.value,
    apellido_id: this.apellido_id.value,
    email_id: this.email_id.value,
    celular_id: this.celular_id.value,
    contact_method: selectedMethod, // Agregar el valor del campo de radio button al objeto de datos
    message: this.message.value
  };

  emailjs.send(serviceID, templateID, formData)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      document.getElementById('form').reset(); // Reinicia el formulario
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
