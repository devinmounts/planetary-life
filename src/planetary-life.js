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
    this.ageMerc = this.ageInYears(mercuryAge);
    return this.ageMerc;
  }

  howMuchTimeMerc() {
    let age = this.ageMercury()
    if (this.lifeEx > age) {
      this.lifeExMerc = this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      this.lifeExMerc = "You could die at any moment";
      else {
      this.lifeExMerc =  (age - this.lifeEx);  //years greater than life expectancy
    }
    return this.lifeExMerc;
  }

  ageVenus() {
    let venusAge = (this.ageSeconds / .62);
    this.ageV = this.ageInYears(venusAge);
    return this.ageV;
  }

  howMuchTimeVenus() {
    let age = this.ageVenus();
    if (this.lifeEx > age) {
      this.lifeExV = this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      this.lifeExV = "You could die at any moment";
      else {
        this.lifeExV =  (age - this.lifeEx);  //years greater than life expectancy
    }
    return this.lifeExV;
  }

  ageMars() {
    let marsAge = (this.ageSeconds / 1.88);
    this.ageMar = this.ageInYears(marsAge);
    return this.ageMar;
  }

  howMuchTimeMars() {
    let age = this.ageMars();
    if (this.lifeEx > age) {
      this.lifeExMar = this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      this.lifeExMar = "You could die at any moment";
      else {
      this.lifeExMar = (age - this.lifeEx);  //years greater than life expectancy
    }
    return this.lifeExMar;
  }

  ageJupiter() {
    let jupiterAge = (this.ageSeconds / 11.86);
    this.ageJup = this.ageInYears(jupiterAge);
    return this.ageJup;
  }

  howMuchTimeJupiter() {
    let age = this.ageJupiter();
    if (this.lifeEx > age) {
      this.lifeExJup = this.lifeEx - age;  //years less than life expectancy
    } else if (this.lifeEx === age)
      this.lifeExJup = "You could die at any moment";
      else {
        this.lifeExJup =  age - this.lifeEx;  //years greater than life expectancy
    }
    return this.lifeExJup;
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
