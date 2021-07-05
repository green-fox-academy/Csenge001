"use strict";

class Person {
    name: string = "Jane Doe";
    age: number = 30;
    gender: string = "female";

    constructor (name?: string, age?: number, gender?: string) {
        this.name = name || this.name;
        this.age = age || this.age;
        this.gender = gender || this.gender;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
    }

    getGoal() {
        console.log("My goal is: Live for the moment!");
    }
}


class Student extends Person {
    previousOrganization: string = "The School of Life";
    skippedDays: number = 0;

    constructor (name?: string, age?: number, gender?: string, previousOrganization?: string, skippedDays?: number) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization || this.previousOrganization;
        this.skippedDays = skippedDays || this.skippedDays;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal() {
        console.log("My goal is: Be a junior software developer.");
    }

    skipDays(numberOfDays: number) {
        return this.skippedDays + numberOfDays;
    }
}


class Mentor extends Person {
    level: string = "intermediate";

    constructor (name?: string, age?: number, gender?: string, level?: string) {
        super(name, age, gender);
        this.level = level || this.level;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }

    getGoal() {
        console.log("My goal is: Educate brilliant junior software developers.");
    }
}


class Sponsor extends Person {
    company: string = "Google";
    hiredStudents: number = 0;

    constructor (name?: string, age?: number, gender?: string, company?: string, hiredStudents?: number) {
        super(name, age, gender);
        this.company = company || this.company;
        this.hiredStudents = hiredStudents || this.hiredStudents;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    getGoal() {
        console.log("My goal is: Hire brilliant junior software developers.");
    }

    hire() {
        return ++this.hiredStudents;
    }
}


class Cohort {
    name: string = "";
    students: Student[] = [];
    mentors: Mentor[] = [];

    constructor (name?: string, students?: Student[], mentors?: Mentor[]) {
        this.name = name || this.name;
        this.students = students || this.students;
        this.mentors = mentors || this.mentors;
    }

    addStudent(student: Student) {
        return this.students.push(student);
    }

    addMentor(mentor: Mentor) {
        return this.mentors.push(mentor);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
    }
}



let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();

