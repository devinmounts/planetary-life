import { Human } from './../src/planetary-life.js';

describe('Human', function() {
  var reusableHuman;

  beforeEach(function() {
    let dateNow = new Date();
    let dateBirth = new Date("1990-08-03");
    reusableHuman = new Human("Smitty", dateBirth);
  });

  it('should test whether a Human is constructed', function(){
    let testBirth = new Date("1990-08-03");
    let testNow = new Date();
    expect(reusableHuman.name).toEqual("Smitty");
    expect(reusableHuman.dateBirth).toEqual(testBirth);
    expect(reusableHuman.dateNow.getDate()).toEqual(testNow.getDate());
    });

    it('should test ageInSeconds() returns Human age in seconds', function(){
      let testNow = new Date();
      let testBirth = new Date("1990-08-03");
      const human = new Human("Smitty", testBirth);

      expect(reusableHuman.ageInSeconds()).toEqual((testNow-testBirth) * .001);

      });

});
