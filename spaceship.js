class Spaceship {
  constructor(name, crew) {
    this.name = name
    this.crew = crew
    this.setCrew(crew)
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = (crew.length === 0)
    this.phasersCharge = "uncharged"
        // this.currentShip = "Looking for a Rig"
  }

  setCrew(crew) {
    crew.forEach(member => member.currentShip = this)
  }

  // engageWarpDrive() {
  //   return "had no effect"
  // }
  //
  // setsInvisibility() {
  //   return "had no effect"
  // }
  //
  // chargePhasers() {
  //   return "had no effect"
  // }

}
