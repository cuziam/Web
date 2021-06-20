var car={
  "color":"red",
  "owner":"cuziam",
  "mileage":70000,
  "callOwner": function(){
    console.log("cuziam!");
  }
};
console.log(car.color);
car.callOwner();

function car(color,owner,mileage){
  this.color=color;
  this.owner=owner;
  this.mileage=mileage;
  this.callOwner=function() {
    console.log("cuziam!");
  }
}
var car1= new car("red","cuziam","70000");
var car2= new car("Blue","Eric","5000");
car1.callOwner();
//구분
var car={
  "color-type":"red",
  "owner":"cuziam",
  "mileage":70000,
  "callOwner": function(){
    console.log("cuziam!");
  }
};

console.log(car["color-type"])
//구분선
var car={
  "color":"red",
  "owner":"cuziam",
  "mileage":70000,
  "callOwner": function(){
    console.log("cuziam!");
  }
};

car.modelYear=2007;
console.log(car.modelYear);
