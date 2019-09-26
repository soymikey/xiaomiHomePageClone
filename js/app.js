
// Function.prototype.call2=function(content){
//     content.fn=this
//     let args=[]
//     for(i=1;i<arguments.length;i++){
//         args.push(arguments[i])
//     }
//     const result=content.fn(...args)
//     delete content.fn
// }

// function bar(n1,n2,n3){
//     console.log(n1)
//     console.log(n2)
//     console.log(n3)
//     console.log(this.name)
//     return {n1,n2,n3,name:this.name}
// }
// obj={
//     name:'michael'
// }
// bar.call2(obj,1,2,3,4)


// function Parent(){
//     this.name='michael'
// }
// Parent.prototype.getName=function(){console.log(this.name)}

// const p1= new Parent()
// p1.getName()

// function Parent(gender){
//     this.name='michael'
//     this.gender='male'
// }
// Parent.prototype.getName=function(){console.log('my name is '+this.name,'i am '+this.gender)}

// function Child(age,gender){
//  Parent.call(this,gender)

//  this.age=age
// }
// // Child.prototype=new Parent()

// const c1= new Child(20,'male')
// console.log(c1);
// c1.getName()



// Function.prototype.apply2=function(content){
//     content=content||window
//     content.fn=this
//     const args=[]
//     for(i=1;i<arguments[2].length;i++){
//         args.push(arguments[i])
//     }
//     content.fn(...args)
//     delete content.fn
// }

// const obj={
//     name:'michael'
// }
// function bar(n1,n2,n3){
//   console.log(n1);
//   console.log(n2);
//   console.log(n3);
// console.log(this.name)
// }
// bar.apply(obj,[1,2,3,4])

//写一个继承

//写一个闭包

// const task = []
// const output = (i) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(new Date, i);
//         resolve();
//     }, 1000 * i);
// });



// for (var i = 0; i < 5; i++) {
//     task.push(output(i))
// }

// Promise.all(task).then(() => {
//     setTimeout(() => {
//         console.log(new Date, i);
//     }, 1000);
// })

// function output(i){
//     setTimeout(() => {
//         console.log(new Date, i);
//     }, 1000*i);
// }
// for(var i=1;i<5;i++){
//     output(i)
// }
// setTimeout(() => {
//     console.log(new Date, i);
// }, 5000);

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(new Date, i);
//     }, i*1000);
// }

// const tasks=[]
// const output=(i)=>{
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve()
//             console.log(new Date, i);
//         }, i*1000);
//     })
// }

// for(var i=0;i<5;i++){
//     tasks.push(output(i))
// }
// Promise.all(tasks).then(()=>{
//     setTimeout(() => {
//         console.log(new Date, i);
//     }, 1000);
// })
// const sleep=(time)=>{return new Promise(resolve=>{
//     setTimeout(() => {
//         resolve()
//     }, time);
// })}
// sleep(1000).then(()=>{
//     console.log('1000');

// })
// function callback(value) {
//     setTimeout(() => {
//         console.log(value)
//     }, value*1000);
// }
// for (var i = 0; i < 5; i++) {
//     callback(i)

// }

// 写一个继承

// function Parent(name) {
//     this.name = name
// }
// Parent.prototype.print = function () {
//     console.log('my name is:' + this.name);
// }
// function Child(name) {
//     Parent.call(this, name)
//     this.age = 10
// }
// Child.prototype = new Parent()
// const c1 = new Child('helloooo')
// c1.print()

// 写一个call函数

// Function.prototype.call2 = function (content){
//     content = content || window
//     content.fn = this
//     let arg=[]
//     for(var i=1;i<arguments.length;i++){
//         arg.push(arguments[i])
//     }
//     content.fn(...arg)
//     delete content.fn
// }





// function bar(age,num) {
//     console.log(age)
//     console.log(num)
//     console.log(`my name is:${this.name}`)
// }

// const obj = {
//     name: 'michale'
// }
// bar.call2(obj,12,234)


// 去重
function unique(array) {
    let newArray = array.filter((item, index, array) => {
        return array.indexOf(item) === index
    })
    return newArray
}
const array = [3, 4, 2, 1, 2, 1, 2, 3, 4, 5, 6, 7, 5, 54, 4, 3, 2]

console.log(unique(array));

//排序
function getMin(array) {
    let min = array[0]
    for (const num of array) {
        if (num < min) {
            min = num
        }
    }
    array.splice(array.indexOf(min), 1)
    return min
}
let newArray = []
const length = array.length
for (let i = 0; i < length; i++) {
    newArray.push(getMin(array))
}
console.log(newArray);

//继承 prototype
function Parent(name) {
    this.name = name
}
Parent.prototype.print = function () {
    console.log('my name is ' + this.name);

}
const p1 = new Parent('p1')
console.log(p1.name);
p1.print()

function Child(name) {
    Parent.call(this, name)
    this.age = 20
}
Child.prototype = new Parent()
const c1 = new Child('c1')

console.log(c1.age, c1.name);
c1.print()

// 手写call/apply function
Function.prototype.call2 = function (content) {
    content = content || window
    content.fn = this
    let arg = []
    for (var i = 1; i < arguments.length; i++) {
        arg.push(arguments[i])
    }
    content.fn(...arg)
    delete content.fn
}



function f1() {
    console.log(this.name)
}
const obj = {
    name: 'michael'
}
f1.call2(obj)

function Name() {
    this.age = 20
   
}
Name.prototype.print=function(){
    return this.age
}



