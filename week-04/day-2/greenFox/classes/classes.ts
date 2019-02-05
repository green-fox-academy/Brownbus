'use strict';

class Person {
  name: string
  age: number
  gender: string;

  constructor(n = 'Jane Doe', a = 30, g = 'female') {
    this.name = n;
    this.age = a;
    this.gender = g;
  }
  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age}, year old ${this.gender}.`)
  }
  getGoal() {
    console.log('My goal is: Live for the moment!')
  }
}

class Student extends Person {
  name: string
  age: number
  gender: string
  previousOrganization: string
  skippedDays: number

  constructor(n = 'Jane Doe', a = 30, g = 'female', pO = 'nothign', sD = 12) {
    super(n, a, g)
    this.previousOrganization = pO
    this.skippedDays = sD
  }
  skipDays(numberOfDays) {
    this.skipDays += numberOfDays;
  }
  getGoal() {
    console.log('My goal is: Be a junior software developer.')
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }
}

class Mentor extends Person {
  level: string //junior/intermediate/senior
  name: string
  age: number
  gender: string
  constructor(n = 'jane Doe', a = 30, g = 'female', l = 'Intermediate') {
    super(n, a, g)
    this.level = l;
  }
  getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers.`)
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;
  name: string;
  age: number;
  gender: string;
  constructor(n = 'Jane Doe', a = 30, g = 'female', c = 'Google') {
    super(n, a, g)
    this.company = c;

  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }
  getGoal() {
    console.log(`My goal is: Hire brilliant junior software developers.`)
  }
  hire() {
    this.hiredStudents += 1;
  }
}

class Cohort {
  name: string
  students: Student[]
  mentors: Mentor[]
  constructor(n = 'Cohort', s = [], m = []) {
    this.name = n
    this.students = s;
    this.mentors = m;
  }
  addMentor(Mentor) {
    this.mentors.push(Mentor)
  }
  addStudent(Student) {
    this.students.push(Student)
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`)
  }
}


export { Person, Student, Mentor, Sponsor, Cohort }