const sentarChavales = arr => {
  //saco el numero de mesas totales en la primera posicion del array
  const numerosDeMesas = arr[0];

  console.log(numerosDeMesas);
  //creo contador de opciones
  let opcionesDeSentada = 0;

  //creo array con las posiciones ocupadas
  let posicionesOcupadas = arr.splice(1, arr.length);
  console.log(posicionesOcupadas);
  //bucle para recorrer todos los asientos
  for (let i = 1; i < numerosDeMesas - 1; i++) {
    //1, que ese propio asiento esté libre
    if (posicionesOcupadas.indexOf(i) < 0) {
      //2 si es par, solo tienes que ver si está ocupado
      //el siguiente asiento par
      if (i % 2 === 0 && posicionesOcupadas.indexOf(i + 2)) {
        opcionesDeSentada++;
      }
      //Si es impar y no es el último impar
      if (i % 2 !== 0 && i != numerosDeMesas - 1) {
        //Sumamos si el siguiente impar está vacío
        if (posicionesOcupadas.indexOf(i + 2) < 0) {
          opcionesDeSentada++;
        }
        //Sumamos si el siguiente número está vacío
        else if (posicionesOcupadas.indexOf(i + 1) < 0) {
          opcionesDeSentada++;
        }
      }
      //Si es el último impar, solo tendremos que ver si está
      //vacío el siguiente asiento, ya que no hay próximo impar
      else if (
        i === numerosDeMesas - 1 &&
        posicionesOcupadas.indexOf(i + 1) < 0
      ) {
        opcionesDeSentada++;
      }
    }
  }
  console.log(opcionesDeSentada);
};
sentarChavales([12, 2, 6, 7, 11]);
