class CrewMember {
    constructor(position, currentShip){
        if(currentShip === undefined){
            currentShip = 'Looking for a Rig'
        }
        this.position = position
        this.currentShip = currentShip
    }

    engageWarpDrive(){
        if(typeof this.currentShip === 'string'){
            return 'had no effect'
        }
        else if (this.position === 'Pilot') {
            console.log("My brains.... are going into my feet...!")
            this.currentShip.warpDrive = 'engaged!'
        }
    }

    setsInvisibility(){
        if (typeof this.currentShip === 'string') {
            return 'had no effect'
        }
        else if (this.position === 'Defender') {
            console.log("Engaging cloak field!")
            this.currentShip.cloaked = true
        }
    }

    chargePhasers(){
        if (typeof this.currentShip === 'string') {
            return 'had no effect'
        }
        else if (this.position === 'Gunner') {
            console.log("Phasers set for maximum charge!!")
            this.currentShip.phasersCharge = "charged!"
        }
    }

}

class Spaceship{
    constructor(name, crew, phasers, shields){
        this.name = name
        this.crew = crew
        this.phasers = phasers
        this.shields = shields
        this.cloaked = false
        this.warpDrive = 'disengaged'
        this.phasersCharge = 'uncharged'
        for (const member of crew) {
            member.currentShip = this
        }
        if(crew.length === 0){
            this.docked = true
        }
        else{
            this.docked = false
        }
    }
    
}
