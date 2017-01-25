// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//
//   sayHello() {
//     console.log("Hello, my name is "+ this.name);
//   }
// }
//
// var sarah = new User("Sarah", "sarah@aol.com");
// sarah.sayHello();
//
// class Teacher extends User {
//     sayHello() {
//       super.sayHello()
//       console.log("I am a teacher");
//     }
// }
//
// var t = new Teacher("Tom", "tom@geocities.edu")
// t.sayHello()
class CrewMember{
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  engageWarpDrive(){
    if (this.currentShip != "Looking for a Rig" && this.position ==="Pilot"){
      this.currentShip.warpDrive = 'engaged!';
    }else{
      return "had no effect";
    }
  }

  setsInvisibility(){
    if (this.currentShip != "Looking for a Rig" && this.position ==="Defender"){
      this.currentShip.cloaked = true;
    }else{
      return "had no effect";
    }
  }

  chargePhasers(){
    if (this.currentShip != "Looking for a Rig" && this.position ==="Gunner"){
      this.currentShip.phasersCharge = 'charged!';;
    }else{
      return "had no effect";
    }
  }
}
