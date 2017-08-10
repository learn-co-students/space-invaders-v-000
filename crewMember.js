
class CrewMember{
  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  canUseAbility(){
    if(this.currentShip === 'Looking for a Rig')
      return false
    return true
  }

  engageWarpDrive(){
    if(!this.canUseAbility() || this.position !== 'Pilot')
      return 'had no effect'
    this.currentShip.warpDrive = 'engaged!'
  }

  setsInvisibility(){
    if(!this.canUseAbility() || this.position !== 'Defender')
      return 'had no effect'
    this.currentShip.cloaked = true
  }

  chargePhasers(){
    if(!this.canUseAbility() || this.position !== 'Gunner')
      return 'had no effect'
    this.currentShip.phasersCharge = 'charged!'
  }
}
