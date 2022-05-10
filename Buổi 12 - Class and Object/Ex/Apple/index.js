class Apple{
    constructor(weight){
        this.weight = 10
    }
    decrease(){
        if(this.weight>0){
            this.weight--
        }
    }
    isEmpty(){
        return this.weight == 0
    }
    getWeight(){
        return this.weight
    }

}
class Human{
    constructor(name, gender, weight){
        this.name = name
        this.gender=gender
        this.weight = weight
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setWeight(weight){
        this.weight = weight;
    }
    getWeigth(){
        return this.weight
    }
    setGender(gender){
        alert("male or female")
        this.gender = gender
    }
    getGender(){
        return this.gender
    }
    say(something){
        console.log(something);
    }
    eat(apple){
        if(this.checkApple(apple)){
            apple.decrease()
            this.weight++
        }
    }
    checkApple(apple){
        return !apple.isEmpty();
    }
    isMale(){
        return this.gender.toLowerCase()=='male'
    }
}
let apple = new Apple();
console.log("Tao 1 qua tao");
console.log(apple.getWeight());
let adam = new Human("Adam", "male", 80)
let eva = new Human("Eva", "female", 50)

adam.say("Toi la Adam")
eva.say("Toi la Eva")
while(!apple.isEmpty()){
    console.log("Adam an tao'!");
    adam.eat(apple)
    console.log("Can nang cua Adam la " +adam.getWeigth())
    
    console.log("Eva an tao'!");
    eva.eat(apple)
    console.log("Can nang cua Eva la " +eva.getWeigth())

    console.log(apple.getWeight());

}