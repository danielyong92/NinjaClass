function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!")
    };

    this.showStats = function(){
       console.log("Name:" + this.name + ", Health:" + this.health + ", Speed:" + speed + ", Strength:" + strength)
    };

    this.drinkSake = function(){
       this.health += 10
    };
}

var bill = new Ninja("Bill")
bill.sayName();
bill.showStats();
console.log("original:" + bill.health)
bill.drinkSake();
console.log("new health:" + bill.health)