function calculator() {
  let num1 = prompt("Introduce un número");

  let operation = prompt("Introduce tu operación: + - * / ^");
  let num2 = prompt("Introduce otro número");
  let result = 0;

  if (operation === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  } else if (operation === "^") {
    result = Math.pow(num1, num2);
  }
  console.log(result);
}

calculator();

//DADOS
//En vez de que sea una cantidad fija doy como opción que se elija
//el número hasta el que se quiere llegar.
//no sé si se pedaa que fuera exactamente 50, si fuera así, lo 
//hasría con if y en caso de pasar de 50 volvera a establecer
//totalScore en 0 para que volviese a empezar

function dieUntilGoal(goal) {
  let totalScore = 0;

  while (totalScore < goal) {
    let valor = parseInt(Math.floor(6 * Math.random() + 1));
    totalScore = totalScore + valor;
    console.log(
      "Has sacado un " + valor + " la puntuación total es " + totalScore
    );
  }
  if (totalScore >= goal) {
    console.log("El juego se ha acabado");
  }
}

dieUntilGoal(50);

//PROFES
//En este ejercicio, el resultado del método AssignAlums es confuso,
//el for of me realiza lo que yo quiero pero 7 veces, controlando
//con las DevTools no fui capaz de modificar este comportamiento
//ni pararlo, provocado por la longitud del array students sin duda.
//En la primera vuelta del for of me hace push a los dos alumnos que quiero,
//pero después lo hace siete veces más.
//He de decir, que para actualizar las StudentList de cada profesor hay que
//llamar al método desde la instancia de cada uno de ellos (teachers[i].assignAlumns).

let nameAlumn = [
  "Carla",
  "Rodrigo",
  "Alberto",
  "Herminia",
  "Facundo",
  "Hermenegildo",
  "Rosaura"
];
let agesAlumn = [20, 21, 23, 21, 19, 20, 19];
let genderAlumn = [
  "macho",
  "hembra",
  "macho",
  "hembra",
  "macho",
  "hembra",
  "macho"
];
let subjectsAlumn = [
  "Matematicas",
  "Matematicas",
  "Geografia",
  "Lengua",
  "Matematicas",
  "Geografia",
  "Lengua"
];
let groupAlumn = ["A", "A", "B", "A", "B", "A", "B"];

let teacherName = ["Churches", "ElCid", "Tinder", "Copito", "Gotera", "Otilio"];
let teacherAge = [40, 50, 60, 70, 60, 50];
let teacherGender = [
  "hembra",
  "hembra",
  "hembra",
  "hembra",
  "hembra",
  "hembra"
];
let teacherSubject = [
  "Lengua",
  "Matematicas",
  "Geografia",
  "Lengua",
  "Matemáticas",
  "Geografía"
];
let teacherGroup = ["A", "A", "A", "B", "B", "B"];

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
class Student extends Person {
  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  static createAlumnList(
    names,
    agesAlumn,
    genderAlumn,
    subjectsAlumn,
    groupAlumn
  ) {
    return names.map((name, index) => {
      return new Student(
        name,
        agesAlumn[index],
        genderAlumn[index],
        subjectsAlumn[index],
        groupAlumn[index]
      );
    });
  }
}
class Teacher extends Person {
  studentList = [];

  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  static createTeachersList(name, age, gender, subject, group) {
    return name.map((name, index) => {
      return new Teacher(
        name,
        teacherAge[index],
        teacherGender[index],
        teacherSubject[index],
        teacherGroup[index]
      );
    });
  }
  assignAlumns(arr) {
    return arr.filter(() => {
      for (const guy of arr) {
        if (guy.subject === this.subject && guy.group === this.group) {
          this.studentList.push(guy);
        }
      }
    });
  }
}
let teachers = Teacher.createTeachersList(
  teacherName,
  teacherAge,
  teacherGender,
  teacherSubject,
  teacherGroup
);
let students = Student.createAlumnList(
  nameAlumn,
  agesAlumn,
  genderAlumn,
  subjectsAlumn,
  groupAlumn
);
