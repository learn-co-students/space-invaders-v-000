class CrewMember{
    constructor(position){
        this.position = position;
        this.currentShip = 'Looking for a Rig'
    }
    engageWarpDrive(){
        if (this.position === 'Pilot' && this.currentShip != 'Looking for a Rig'){
          console.log(`Engaging warp drive of ${this.currentShip.name}`)
            this.currentShip.warpDrive = 'engaged!'
        } else {
            return "had no effect"
        }
    }
    setsInvisibility(){
        if (this.position === "Defender" && this.currentShip != 'Looking for a Rig'){
          console.log(`Setting invisibility of ${this.currentShip.name}`)
            this.currentShip.cloaked = true;
        } else {
            return "had no effect"
        }
    }
    chargePhasers(){
        if (this.position === "Gunner" && this.currentShip != 'Looking for a Rig'){
          console.log(`Chargin phasers of ${this.currentShip.name}`)
            this.currentShip.phasersCharge = 'charged!'
        } else {
            return "had no effect"
        }
    }
    setCurrentShip(ship){
        this.currentShip = ship;
    }
}
