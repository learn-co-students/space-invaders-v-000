class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig';
  }

  useAbility(position) {
    if (this.position === position && !(this.currentShip === 'Looking for a Rig')) {
      const ability = {
        'Pilot':    'engageWarp',
        'Defender': 'cloak',
        'Gunner':   'arm'
      }[position];

      return this.currentShip[ability]();
    }

    return 'had no effect';
  }

  engageWarpDrive() {
    return this.useAbility('Pilot');
  }

  setsInvisibility() {
    return this.useAbility('Defender');
  }

  chargePhasers() {
    return this.useAbility('Gunner');
  }
}
