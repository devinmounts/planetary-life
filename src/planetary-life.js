export class Human{
  constructor(name, dateBirth) {
    this.name = name;
    this.dateNow = new Date();
    this.dateBirth = new Date(dateBirth);
    this.age = 0;
  }

  ageInSeconds(dateNow, dateBirth) {
    let age = this.age;
    age = (dateNow - dateBirth) / 1000;
    return age;
  }
}
