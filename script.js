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
    function car(model,color,type,fuel){
        this.model = model
        this.color=color
        this.type=type
        this.fuel=fuel
        this.reveal=()=>{
            console.log(`Hello sir, This the brand new ${model}, This is a ${}`)
        }
    }
}