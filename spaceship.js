class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked =  this.crew.length < 1
    this.phasersCharge = "uncharged"
    this.setCrew()

  }

  chargePhasers(){
    this.phasers = "charged"
  }

  setCrew(){
    this.crew.forEach(member =>{
      member.currentShip = this
    })
  }
}

