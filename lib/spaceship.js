function Spaceship(shipName, shipCrew, shipPhasers, shipShields) {
  this.name = shipName;
  this.phasers = shipPhasers;
  this.shipCrew = shipCrew;
  this.shields = shipShields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  if (this.shipCrew.length === 0)
  {
    this.docked = true;
  }
  else
  {
    this.docked = false;
    var thisShip = this;
    this.shipCrew.forEach(function(crewPerson) {
      crewPerson.currentShip = thisShip;
    });
  }

}
