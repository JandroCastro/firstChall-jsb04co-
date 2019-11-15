"use strict";
class Banco {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.clients = [];
  }

  changeAccountAccess(cuenta) {
    if (cuenta.access === true) {
      cuenta.access = false;
      return;
    }
    cuenta.access = true;
  }
}

class CuentaBancaria {
  constructor(id) {
    this.balance = 0;
    this.id = id;
    this.access = true;
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
    return new CuentaBancaria(this.id);
  }
  /* Si lo que tengo en el monedero es menor que la cantidad que
  quiero ingresar, me lo alerta. Si es posible hacerlo, actualizamos
  los valores de monedero y cuenta*/
  ingresarDinero(ammount, cuenta) {
    if (cuenta.access === true && cuenta.id === this.id) {
      if (this.moneyPocket > ammount) {
        cuenta.balance += ammount;
        this.moneyPocket -= ammount;
        console.log(
          `Has ingresado ${ammount} $, tienes ${cuenta.balance} $ en la cuenta, y ${this.moneyPocket} $ en el monedero`
        );
      } else {
        alert("No tienes suficiente dinero");
      }
    } else {
      console.log("No tienes acceso a la cuenta o no coincide con tu id");
    }
  }

  /* Si lo que tengo en la cuenta es menor que la cantidad que
  quiero retirar, me lo alerta. Si es posible hacerlo, actualizamos
  los valores de monedero y cuenta*/

  retirarDinero(ammount, cuenta) {
    if (cuenta.access === true && cuenta.id === this.id) {
      if (cuenta.balance > ammount) {
        cuenta.balance -= ammount;
        this.moneyPocket += ammount;
        console.log(
          `Has retirado ${ammount} $, te quedan en la cuenta ${cuenta.balance} $`
        );
      } else {
        alert(`Tienes menos de ${ammount} $ en la cuenta`);
      }
    } else {
      console.log("No tienes acceso a la cuenta o no coincide con tu ID");
    }
  }
  /*Sacamos por consola el balance de cuenta*/

  mostrarSaldo(cuenta) {
    if (cuenta.access === true && cuenta.id === this.id) {
      console.log(`Tienes ${cuenta.balance} $ en la cuenta`);
    } else {
      console.log("No tienes acceso a la cuenta");
    }
  }
}

/*Instanciamos un nuevo titular, banco y cuenta*/

const Jandro = new Titular("Jandro", "Masculino", 3000000);

const myBank = new Banco("Santander", "Calle Juan Flórez");

const cuentaDeJandro = Jandro.abrirCuentaBancaria(myBank);
