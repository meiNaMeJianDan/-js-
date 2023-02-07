//一面 4道编程题
// 1.实现两个对象Kid,Girl。实现继承
function Kid(name,age){
    this.name = name
    this.age = age
}

Kid.prototype.play = ()=>{
    console.log("I like playing")
}

// function Girl(name,age,sex){
//     Kid.apply(this,[name,age])
//     this.sex = sex
// }

// Girl.prototype.play = ()=>{
//     console.log("I like to play doll")
// }
// Girl.prototype.dance = ()=>{
//     console.log("I like dancing")
// }

// const g = new Girl("lily",8,1)
// console.log(g)
// g.dance()
// g.play()
const copy = (obj)=>{
    function Fun(){}
    Fun.prototype = obj
    return new Fun()
}

