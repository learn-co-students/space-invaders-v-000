

class CrewMember {

  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  setAttribute(attribute) {
    var info = {cloaked: ['Defender', true], warpDrive: ['Pilot', 'engaged!'], phasersCharge: ['Gunner', 'charged!']}
    if (info[attribute][0] === this.position) {
      if (typeof this.currentShip[attribute] != "undefined") {
        this.currentShip[attribute] = info[attribute][1];
      } else {
        return 'had no effect';
      }
    } 
  }

  setsInvisibility() {
    return this.setAttribute('cloaked')
  }

  chargePhasers() {
    return this.setAttribute('phasersCharge')
  }

  engageWarpDrive() {
    return this.setAttribute('warpDrive')
  }

} // END of CrewMember

class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = this.setCrew(crew);
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = this.setDocked();
    this.phasersCharge = 'uncharged';
  }

  setDocked() {
    if (this.crew.length === 0) {return true}
    return false;
  }

  setCrew(crew) {
    for (var i in crew) {
      crew[i].currentShip = this;
    }
    return crew;
  }
}
