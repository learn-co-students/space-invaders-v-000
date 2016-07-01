function Spaceship(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = "uncharged"){
  // var docked = this.crew.empty? ? true : false
  this.name = name
  this.crew = crew
  this.phasers = phasers
  this.shields = shields
  this.cloaked = cloaked
  this.warpDrive = warpDrive
  this.phasersCharge = phasersCharge

  if(crew.length === 0 ){
      this.docked = true
    } else {
      this.docked = false
    };
    var ship = this
  crew.forEach(function(member) {
    member.currentShip = ship
  });

};
