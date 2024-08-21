console.log("window call")
console.log("this : ",this)
{

let obj ={
    name : "Anu",
    age : 20,
    getAge : function(){
        console.log("this : ",this)
        console.log("age : ",this.age)
    }
}
obj.getAge()

console.log("\n\n\n\n")

function greetings(mes1,mes2){
    console.log("message : ",mes1)
    console.log("message : ",mes2)

    console.log("this : ",this)
    console.log("this.name : ",this.name)
    console.log("this.age : ",this.age)

}

greetings("hello","welcome")
greetings.call(obj,"hello","welcome")
greetings.apply(obj,["hello","welcome"])
let bindfun = greetings.bind(obj,"hello","welcome")
console.log("bind function : ",bindfun)
bindfun()

}

console.log("\n\n\n\n")

{
    function Person(name,age,mark){
        this.name = name
        this.age=age
        this.mark=mark
        this.greeting=()=>{
            console.log(`Hello ${this.name}, you are ${this.age} years old`)
        }
    }

    person = new Person("Jane",16,45)
    console.log("person : ",person)
    person.greeting()

    person1 = new Person("Jack",18,35)
    console.log("person : ",person1)
    person1.greeting()

    person1.city ="ekm"


    person1.getAge =function(){
        console.log(`Hi ${this.name}, you are ${this.age} years old`)
    }
    person1.getAge()

    Person.prototype.getMark=function(){
        console.log(`Hey ${this.name}, you are ${this.age} years old`)

    }
    person.getMark()
    person1.getMark()
}

console.log("\n\n\n\n")

{
    function car(brand,model,color,type,fuel){
        this.brand = brand
        this.model = model
        this.color=color
        this.type=type
        this.fuel=fuel
        this.reveal=()=>{
            console.log(`Hello sir, This the brand new ${model} from ${brand} Motors, It is a ${type} type model and it is powered by a ${fuel} engine, and it's got a beatiful ${color} colour body`)
        }
    }
    nexon = new car("TATA ","Nexon",'Blue','Compact SUV','Petrol')
    console.log("car1 :",nexon)
    nexon.reveal()

    scorpio = new car("Mahindra",'scorpio','black','SUV','Petrol')
    console.log("car2 : ",scorpio)
    scorpio.reveal()

    city = new car("Honda",'city','White','sedan','Petrol VVT')
    console.log("car3 : ",city)
    city.price = 1200000
    scorpio.reveal()
    console.log("Added : {price:",city.price,"}")

    car.prototype.addquote= function(){
        console.log(`This ${this.model} is a very good car`)
    }

    nexon.addquote()
    scorpio.addquote()
    city.addquote()

}

console.log("\n\n\n\n")

{
    function animal(type,name,eat){
        this.type=type
        this.name=name
        this.eat=eat
        this.exp=()=>{
            console.log(`This is an animal called ${name}, It is a ${type} animal, It is a ${eat} type`)
        }
    }
    cat = new animal('Domestic','cat','carnivore')
    console.log("animal1 :",cat)
    cat.exp()

    tiger = new animal('Wild-life','Tiger','Omnivore')
    console.log("animal2 : ",tiger)
    tiger.exp()


    zebra = new animal('Wild-life','Zebra','Herbivore')
    console.log("animal3 : ",zebra)
    zebra.exp()
    zebra.color ="Black and White"

}





console.log("\n\n\n\n")

{
    class Person{
        name;
        age
        mark

        constructor(name,age,mark){
            this.name=name
            this.age=age
            this.mark=mark
        }

        greeting(){
            console.log(`Hello ${this.name}, you are ${this.age} years old`) 
        }
    }

    person1 = new Person('Davood',32,76)
    console.log("person1 :  ", person1)
    person1.greeting()


    person2 = new Person('Jack',22,66)
    console.log("person2 :  ", person2)
    person2.year=2002
    person2.greeting()

}


console.log("\n\n\n\n")

{
    class animal{
        type
        name
        eat

        constructor(type,name,eat){
        this.type=type
        this.name=name
        this.eat=eat
        }
        exp(){
            console.log(`This is an animal called ${this.name}, It is a ${this.type} animal, It is a ${this.eat} type`)
        }
    }
    cat = new animal('Domestic','cat','carnivore')
    console.log("animal1 :",cat)
    cat.exp()

    tiger = new animal('Wild-life','Tiger','Omnivore')
    console.log("animal2 : ",tiger)
    tiger.exp()


    zebra = new animal('Wild-life','Zebra','Herbivore')
    console.log("animal3 : ",zebra)
    zebra.exp()
    zebra.color ="Black and White"

}


console.log("\n\n\n\n")


{
    class Animal{
        name

        constructor(name){
            this.name=name
        }

        walking(){
            console.log(`${this.name} is walking`)
        }
    }
    monkey = new Animal("monkey")
    console.log("animal1 :",monkey)
    monkey.walking()


    class dog extends Animal{
        nickname

        constructor(name,nickname){
            super(name)
            this.nickname=nickname
        }

        running(){
            console.log(`${this.nickname} is running`)
        }
    }

    tom = new dog('dog','tom')
    console.log("tom",tom)
    tom.walking()
    tom.running()
}

console.log("\n\n\n\n")

{
    //using setter and getter

    class car{
        name
        color

        constructor(name){
            this.name=name
        }

        set color(color){
            this.color=color
        }

        get color(){
            return  this.color
        }
    }

    car1=new car('jaguar')
    console.log("car1 : ",car1)

    car1.color='red'
    console.log("car1 : ",car1)

    console.log("color : ",car1.color)

}

