export class Human{
  constructor(name, gender, dateBirth) {
    this.name = name;
    this.gender = gender;
    this.dateNow = new Date();
    this.dateBirth = new Date(dateBirth);
    this.ageSeconds = 0;
    this.ageYears = 0;
    this.lifeEx = 0;
  }

  ageInSeconds() {
    this.ageSeconds = (this.dateNow - this.dateBirth) * .001;
    return this.ageSeconds;
  }

  ageInYears() {
    this.ageYears = this.ageSeconds / 31557600;
    return this.ageYears;
  }

  lifeExpectancy() {
    if (this.gender === "M") {
      this.lifeEx = 76;
    } else if (this.gender === "F") {
      this.lifeEx = 81;
    } else
      this.lifeEx = 78;
    return this.lifeEx;
  }
  // ageOnPlanets() {
  //   ageMercury();
  //   ageVenus();
  //   ageMars();
  //   ageJupiter();
  // }
  ageMercury() {
    let mercuryAge = (this.ageSeconds / .24);
    return mercuryAge;
  }

  ageVenus() {
    let venusAge = (this.ageSeconds / .62);
    return venusAge;
  }

  ageMars() {
    let marsAge = (this.ageSeconds / 1.88);
    return marsAge;
  }

  ageJupiter() {
    let jupiterAge = (this.ageSeconds / 11.86);
    return jupiterAge;
  }
}
