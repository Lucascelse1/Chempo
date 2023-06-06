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
