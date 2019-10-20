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
console.log(students);
console.log(teachers[1]);
console.log(teachers);
