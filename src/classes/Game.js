import Map from './Map'

class Game  {

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.map = new Map(11,12)
  }

  sayName() {
    return `${this.firstname} ${this.lastname}`;
  }

  getMap(){
    return `${this.map}`
  }
}

export default Game;
