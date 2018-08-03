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
    let mercuryAge = (this.age / .24);
    return mercuryAge;
  }

  ageVenus() {
    let venusAge = (this.age / .62);
    return venusAge;
  }

  ageMars() {
    let marsAge = (this.age / 1.88);
    return marsAge;
  }

  ageJupiter() {
    let jupiterAge = (this.age / 11.86);
    return jupiterAge;
  }
}
