import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  var reusableHaiku;

  beforeEach(function() {
    reusableHaiku = new Haiku("recipe fresh green grass talks", "it says green and good day", "I smile and walk on");
  });

  it('should test whether a haiku has three lines', function(){
    expect(reusableHaiku.line1).toEqual(["recipe", "fresh", "green", "grass", "talks"]);
    expect(reusableHaiku.line2).toEqual(["it", "says", "green", "and", "good", "day"]);
    expect(reusableHaiku.line3).toEqual(["i", "smile", "and", "walk", "on"]);
  });

  it('should test vowelsCounter() method updates lineResult', function() {
    reusableHaiku.vowelsCounter(reusableHaiku.line1);
    expect(reusableHaiku.lineResult).toEqual(8);
  });

  it('should test endsWithE() method updates lineResult for silent e', function() {
    reusableHaiku.vowelsCounter(reusableHaiku.line3);
    reusableHaiku.endswithE(reusableHaiku.line3);
    expect(reusableHaiku.lineResult).toEqual(5);
  });

  it('should test endsWithE() method updates lineResult for exceptions', function() {
    reusableHaiku.vowelsCounter(reusableHaiku.line1);
    reusableHaiku.endswithE(reusableHaiku.line1);
    expect(reusableHaiku.lineResult).toEqual(8);
  });

  it('should test phthongCheck() method updates lineResult for repeating vowels', function() {
    reusableHaiku.vowelsCounter(reusableHaiku.line2);
    reusableHaiku.endswithE(reusableHaiku.line2);
    reusableHaiku.phthongCheck(reusableHaiku.line2);
    expect(reusableHaiku.lineResult).toEqual(6);
  });

  it('should test containsY() method updates lineResult for words containing in y', function() {
    let yHaiku = new Haiku("yuppy gymnasium", "wow", "wow");
    yHaiku.containsY(yHaiku.line1);
    expect(yHaiku.lineResult).toEqual(1);
  });

  it('should test endsWithY() method updates lineResult for words ending in y', function() {
    let yHaiku = new Haiku("yuppy gymnasium", "wow", "wow")
    // yHaiku.vowelsCounter(yHaiku.line1);
    // yHaiku.endswithE(yHaiku.line1);
    // yHaiku.phthongCheck(yHaiku.line1);
    yHaiku.endsWithY(yHaiku.line1);
    expect(yHaiku.lineResult).toEqual(1);
  });
});
