import { Human } from './../src/planetary-life.js';

describe('Human', function() {

  it('should test whether a Human is constructed', function(){
    let testBirth = new Date("1990-08-03");
    let testNow = new Date();
    const human = new Human("Smitty", "M", testBirth);
    expect(human.name).toEqual("Smitty");
    expect(human.dateBirth).toEqual(testBirth);
    expect(human.dateNow).toEqual(testNow);
  });

  it('should test ageInSeconds() returns Human age in seconds', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds()
    expect(human.ageSeconds).toEqual((testNow-testBirth) *.001);
  });

  it('should test ageMercury() returns Human age on mercury in years', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    let testSec = (testNow-testBirth) * .001;
    let testAge = (testSec / .24) / 31557600;
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.ageMercury()
    expect(human.ageMerc).toEqual(testAge);
  });

  it('should test ageVenus() returns Human age on venus in years', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    let testSec = (testNow-testBirth) * .001;
    let testAge = (testSec / .62) / 31557600;
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.ageVenus();
    expect(human.ageV).toEqual(testAge);
  });

  it('should test ageMars() returns Human age on mars in years', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    let testSec = (testNow-testBirth) * .001;
    let testAge = (testSec / 1.88) / 31557600;
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.ageMars();
    expect(human.ageMar).toEqual(testAge);
  });

  it('should test ageJupiter() returns Human age on jupiter in years', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    let testSec = (testNow-testBirth) * .001;
    let testAge = (testSec / 11.86) / 31557600;
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.ageJupiter()
    expect(human.ageJup).toEqual(testAge);
  });

  it('should test lifeExpectancy() returns Human life expectancy', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    const human = new Human("Smitty", "M", testBirth);
    expect(human.lifeExpectancy()).toEqual(76);
  });

  it('should test ageInYears() returns human years', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    let testSec = (testNow-testBirth) * .001;
    let testAge = testSec / 31557600;
    const human = new Human("Smitty", "M", testBirth);
    let seconds = human.ageInSeconds();
    expect(human.ageInYears(seconds)).toEqual(testAge);
  });

  it('should test howMuchTimeMerc() returns age to lifeEx comparison', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.lifeExpectancy();
    human.howMuchTimeMerc(this.ageSeconds)
    let testAge = (((testNow - testBirth) * .001) / .24) / 31557600;
    expect(human.lifeExMerc).toEqual(testAge - 76);
  });

  it('should test howMuchTimeVenus() returns age to lifeEx comparison', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.lifeExpectancy();
    human.howMuchTimeVenus(this.ageSeconds)
    let testAge = (((testNow - testBirth) * .001) / .62) / 31557600;
    expect(human.lifeExV).toEqual(76 - testAge);
  });

  it('should test howMuchTimeMars() returns age to lifeEx comparison', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.lifeExpectancy();
    human.howMuchTimeMars(this.ageSeconds)
    let testAge = (((testNow - testBirth) * .001) / 1.88) / 31557600;
    expect(human.lifeExMar).toEqual(76 - testAge);
  });

  it('should test howMuchTimeJupiter() returns age to lifeEx comparison', function(){
    let testNow = new Date();
    let testBirth = new Date("1990-08-03");
    const human = new Human("Smitty", "M", testBirth);
    human.ageInSeconds();
    human.lifeExpectancy();
    human.howMuchTimeJupiter(this.ageSeconds);
    let testAge = (((testNow - testBirth) * .001) / 11.86) / 31557600;
    expect(human.lifeExJup).toEqual(76 - testAge);
  });

});
