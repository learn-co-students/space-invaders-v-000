class Spaceship {
    constructor(name, crew, phasers, shields, clocked = false, warpDrive = 'disengaged', phasersCharge = 'uncharged') {
        this.name = name
        this.crew = crew
        this.phasers = phasers
        this.shields = shields
        this.cloaked = clocked
        this.warpDrive = warpDrive
        this.phasersCharge = phasersCharge
        if (crew.length === 0) {
          this.docked = true
        }else{
          this.docked = false
        }
        this.notifyCrew()
    }

    notifyCrew(){
        this.crew.forEach(crewMember => {
            crewMember.currentShip = this
        })
    }
}