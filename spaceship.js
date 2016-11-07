
class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig'
  }
}

class Spaceship {
  constructor(name, crews, phasers, shields) {
    this.name = name;
    this.crews = crews;
    this.phasers = phasers;
    this.shields = shields;
  }
}
