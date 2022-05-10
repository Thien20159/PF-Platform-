
class Battery{
    constructor(){}
    setEnery(enery){
        this.enery = enery
    }
    getEnery(){
        return this.enery
    }
    decreaseEnery(){
        if(this.enery > 0){
            this.enery -= 1;
        }
    }
}
class FlashLamp{
    constructor(){}
    setBattery(battery){
        this.battery = battery
    }
    getBatteryInfo(){
        return this.battery.getEnery();
    }
    light(){
        if(this.status){
            alert("Lighting")
        }else{
            alert("Not lighting")
        }
        // return this.status?"Lighting":"Not lighting"
    }
    turnOn(){
        this.status = true
    }
    turnOff(){
        this.status = false
    }
}

let battery = new Battery();
battery.setEnery("")
console.log(battery);

let flashLamp = new FlashLamp()
flashLamp.setBattery(battery)
console.log(flashLamp)

flashLamp.turnOn()

flashLamp.light()

flashLamp.turnOff()

flashLamp.light()

console.log(flashLamp)


