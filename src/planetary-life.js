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

  ageMercury() {
    let mercuryAge = (this.age * .24) / 31557600;
    return mercuryAge
  }
}
