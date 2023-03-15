// Agrega un evento de clic al botón para minimizar el contenido de la sección
document.getElementById('boton-minimizar').addEventListener('click', function() {
    var contenido = document.getElementById('contenido-seccion');
    if (contenido.style.display === 'none') {
      contenido.style.display = 'block';
      document.getElementById('boton-minimizar').innerHTML = '-';
    } else {
      contenido.style.display = 'none';
      document.getElementById('boton-minimizar').innerHTML = '+';
    }
  });
  document.getElementById('boton-minimizar2').addEventListener('click', function() {
    var contenido = document.getElementById('contenido-seccion2');
    if (contenido.style.display === 'none') {
      contenido.style.display = 'block';
      document.getElementById('boton-minimizar2').innerHTML = '-';
    } else {
      contenido.style.display = 'none';
      document.getElementById('boton-minimizar2').innerHTML = '+';
    }
  });