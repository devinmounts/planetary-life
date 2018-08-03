export class Human{
  constructor(name, dateBirth) {
    this.name = name;
    this.dateNow = new Date();
    this.dateBirth = new Date(dateBirth);
    this.age = 0;
  }

  // ageInSeconds(dateNow, dateBirth) {
  //
  //   let this.age = (dateNow - dateBirth) / 1000;
  // }
}
