//////////////////////////////////////////////////////////////////
//EJERCICIO 1
const sara = [89, 120, 103];
const laura = [116, 94, 123];
const maria = [97, 134, 105];

const totalMatchesScore = arr => {
  return arr.reduce((contador, puntos) => {
    return (contador = contador + puntos);
  }, 0);
};

const makeMedia = arr => {
  let puntosTotales = totalMatchesScore(arr);
  return puntosTotales / arr.length;
};

const mostrarMensaje = () => {
  if (makeMedia(sara) > makeMedia(laura)) {
    console.log(
      `Gana Sara, la puntuación media es de  ${makeMedia(
        sara
      )} puntos, mientras que la de Laura es de  ${makeMedia(laura)} `
    );
  }
  console.log(
    `Gana Laura, la puntuación media es de  ${makeMedia(
      laura
    )} puntos, mientras que la de Sara es de  ${makeMedia(sara)} `
  );
};

mostrarMensaje();

///////////////////////////////////////////////////////////////
//EJERCICIO2

const factura = [124, 58, 268];

const calculoPropinas = arr => {
  let propinas = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 50) {
      propinas.push(arr[i] * 0.2);
    } else if (arr[i] > 50 && arr[i] < 200) {
      propinas.push(arr[i] * 0.15);
    } else {
      propinas.push(arr[i] * 0.1);
    }
    //console.log(propinas);
  }
  return propinas;
};

calculoPropinas(factura);

const sumarPropinasAFactura = arr => {
  let costeTotal = [];

  for (let i = 0; i < arr.length; i++) {
    costeTotal[i] = arr[i] + calculoPropinas(arr)[i];
  }
  return costeTotal;
};

console.log(sumarPropinasAFactura(factura));

//////////////////////////////////////////////////////////////
//EJERCICIO3

const nums = [100, 3, 4, 2, 10, 4, 1, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

nums.map((value, index) => {
  console.log(value, index);
});

for (const iterator of nums) {
  console.log(iterator);
}

const orderArray = arr => {
  const auxArr = [...arr];
  for (let i = 0; i < auxArr.length; i++) {
    for (let j = 0; j < auxArr.length; j++) {
      if (auxArr[i] < auxArr[j]) {
        const temp = auxArr[j];
        auxArr[j] = auxArr[i];
        auxArr[i] = temp;
      }
    }
  }
  return auxArr;
};

const superOrderArray = arr => {
  arr.sort((a, b) => {
    return b - a;
  });
  console.log(nums);
};

//////////////////////////////////////////////////////////////
//EJERCICIO4

const modificarNumeros = () => {
  let num1 = parseInt(prompt("Introduce un número"));
  let num2 = parseInt(prompt("Introduce otro número"));
  let resultado = num1 - num2;
  if (resultado > 0) {
    alert(resultado);
  } else {
    alert(resultado * -1);
  }
};

modificarNumeros();
