class Banco {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.clients = [];
  }
}

class CuentaBancaria {
  constructor(id) {
    this.balance = 0;
    this.id = id;
  }
}

class Titular {
  constructor(name, gender, moneyPocket) {
    this.name = name;
    this.gender = gender;
    this.moneyPocket = moneyPocket;
    this.id = Math.floor(Math.random() * 999999999);
  }
  /*Para abrir la cuenta bancaria. primero "nos damos de alta" 
como clientes haciendo push al array de clientes del banco
de un objeto con nuestro nombre e ID. Después generamos una
instancia de una nueva cuenta, generando otro id*/

  abrirCuentaBancaria(banco) {
    banco.clients.push({ name: this.name, id: this.id });
    return new CuentaBancaria(Math.floor(Math.random() * 999999999));
  }
  /* Si lo que tengo en el monedero es menor que la cantidad que
quiero ingresar, me lo alerta. Si es posible hacerlo, actualizamos
los valores de monedero y cuenta*/
  ingresarDinero(ammount, cuenta) {
    if (this.moneyPocket > ammount) {
      cuenta.balance += ammount;
      this.moneyPocket -= ammount;
      console.log(
        `Has ingresado ${ammount} $, tienes ${cuenta.balance} $ en la cuenta, y ${this.moneyPocket} $ en el monedero`
      );
    } else {
      alert("No tienes suficiente dinero");
    }
  }
  /* Si lo que tengo en la cuenta es menor que la cantidad que
quiero retirar, me lo alerta. Si es posible hacerlo, actualizamos
los valores de monedero y cuenta*/

  retirarDinero(ammount, cuenta) {
    if (cuenta.balance > ammount) {
      cuenta.balance -= ammount;
      this.moneyPocket += ammount;
      console.log(
        `Has retirado ${ammount} $, te quedan en la cuenta ${cuenta.balance} $`
      );
    } else {
      alert(`Tienes menos de ${ammount} $ en la cuenta`);
    }
  }
  /*Sacamos por consola el balance de cuenta*/

  mostrarSaldo(cuenta) {
    console.log(`Tienes ${cuenta.balance} $ en la cuenta`);
  }
}

/*Instanciamos un nuevo titular, banco y cuenta*/

const Jandro = new Titular("Jandro", "Masculino", 3000000);

const myBank = new Banco("Santander", "Calle Juan Flórez");

const cuentaDeJandro = Jandro.abrirCuentaBancaria(myBank);

Jandro.ingresarDinero(300, cuentaDeJandro);
Jandro.retirarDinero(100, cuentaDeJandro);

console.log(cuentaDeJandro.balance);
console.log(Jandro);
