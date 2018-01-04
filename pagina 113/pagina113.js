var balance = 10500;
var cameraOn = true;

function steal(balance, amount){
    cameraOn = false;
    if(amount < balance){
        balance = balance - amount;
    }
   
    return amount;
    cameraOn = true;
}

var amount = (balance, 1250);
console.log(cameraOn);
console.log(balance);
console.log(amount);
console.log("criminal: you stole " + amount + "!");