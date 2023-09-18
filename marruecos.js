  // Función para realizar la conversión
  function convertirADirhams() {
    const tasaDeCambio = 10.7; // Reemplaza con la tasa de cambio actual
    const monto = parseFloat(document.getElementById('monto').value);
    const resultado = monto * tasaDeCambio;
    document.getElementById('resultado').textContent = resultado.toFixed(2) + ' dírhams marroquíes';
  }

  // Escucha el evento de cambio en el input para actualizar el resultado
  document.getElementById('monto').addEventListener('input', convertirADirhams);

  // Llama a la función inicialmente
  convertirADirhams();

