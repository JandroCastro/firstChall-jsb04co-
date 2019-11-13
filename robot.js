/*Creamos la clase y establecemos como posicion en un eje de coordenadas
el (0,0)*/
class Robot {
  positionAxisY = 0;
  positionAxisX = 0;
  constructor(place) {
    this.place = place;
  }
//Si el movimiento no está restringido, aumentamos o disminuimos
//en una unidad la posición en el eje X o Y según corresponda.

//restringimos mov izquierda si la posicion en eje x es cero
  moveLeft() {
    if (this.positionAxisX === 0) {
      return false;
    }
    this.positionAxisX--;
    return true;
  }
//restringimos mov derecha si la posicion en eje x es el
//otro extremo del array
  moveRight() {
    if (this.positionAxisX === this.place.length - 1) {
      return false;
    }
    this.positionAxisX++;
    return true;
  }
//restringimos mov hacia arriba si la posicion en eje y es 
// el primer array de la matriz
  moveUp() {
    if (this.positionAxisY === 0) {
      return false;
    }
    this.positionAxisY++;
    return true;
  }
//restringimos mov hacia abajo si la posicion en eje Y es
//el último array
  moveDown() {
    if (this.positionAxisY === this.place.length - 1) {
      return false;
    }
    this.positionAxisY++;
    return true;
  }
//Devuelve la posición actual del robot
  currentPosition() {
    return this.place[this.position];
  }
}

const mySpace = [
  [1, 9, 5],
  [7, 6, 3],
  [6, 6, 8]
];
const myLittlePrettyRobot = new Robot(mySpace);

myLittlePrettyRobot.moveRight();
myLittlePrettyRobot.moveDown();

console.log(myLittlePrettyRobot);
