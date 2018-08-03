export class Human{
  constructor(name, dateBirth) {
    this.name = name;
    this.dateNow = new Date();
    this.dateBirth = new Date(dateBirth);
    this.age = 0;
  }

  ageInSeconds() {
    this.age = (this.dateNow - this.dateBirth) * .001;
    return this.age;
  }
}
