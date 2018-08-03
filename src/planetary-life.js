export class Human{
  constructor(name, gender, dateBirth) {
    this.name = name;
    this.gender = gender;
    this.dateNow = new Date();
    this.dateBirth = new Date(dateBirth);
    this.ageSeconds = 0;
    this.lifeEx = 0;
    this.ageMerc = 0;
    this.ageMar = 0;
    this.ageV = 0;
    this.ageJup = 0;
    this.lifeExMerc = 0;
    this.lifeExV = 0;
    this.lifeExMar = 0;
    this.lifeExJup = 0;
  }

  ageInSeconds() {
    this.ageSeconds = (this.dateNow - this.dateBirth) * .001;
    return this.ageSeconds;
  }

  ageInYears(seconds) {
    let age = seconds / 31557600;
    return age;
  }

  lifeExpectancy() {
    if (this.gender === "M") {
      this.lifeEx = 76;
    } else if (this.gender === "F") {
      this.lifeEx = 81;
    } else {
      this.lifeEx = 78;
    }
    return this.lifeEx;
  }

  ageMercury() {
    let mercuryAge = (this.ageSeconds / .24);
    return mercuryAge;
  }

  howMuchTimeMerc() {
    let age = this.ageInYears(this.ageMercury())
    if (this.lifeEx > age) {
      return this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      return "You could die at any moment";
      else {
        return  age - this.lifeEx;  //years greater than life expectancy
    }
  }

  ageVenus() {
    let venusAge = (this.ageSeconds / .62);
    return venusAge;
  }

  howMuchTimeVenus() {
    let age = this.ageInYears(this.ageVenus())
    if (this.lifeEx > age) {
      return this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      return "You could die at any moment";
      else {
        return  age - this.lifeEx;  //years greater than life expectancy
    }
  }

  ageMars() {
    let marsAge = (this.ageSeconds / 1.88);
    return marsAge;
  }

  howMuchTimeMars() {
    let age = this.ageInYears(this.ageMars())
    if (this.lifeEx > age) {
      return this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      return "You could die at any moment";
      else {
        return  age - this.lifeEx;  //years greater than life expectancy
    }
  }

  ageJupiter() {
    let jupiterAge = (this.ageSeconds / 11.86);
    return jupiterAge;
  }

  howMuchTimeJupiter() {
    let age = this.ageInYears(this.ageJupiter())
    if (this.lifeEx > age) {
      return this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      return "You could die at any moment";
      else {
        return  age - this.lifeEx;  //years greater than life expectancy
    }
  }

  runPlanets() {
    this.ageInSeconds();
    this.lifeExpectancy()
    this.ageMercury();
    this.howMuchTimeMerc();
    this.ageMars();
    this.howMuchTimeMars();
    this.ageJupiter();
    this.howMuchTimeJupiter();
  }
}
