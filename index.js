// let b=10;
// function abcd(){
//       b= "abs";
//     console.log(b);
// }
// console.log(b)
// abcd();
// console.log(a);
// var a =10;
// console.log(a);
// console.log(b);
// let b =10;
// var a=10;
// let b=20;
// sum();
// function sum(){
//   let c=a+b;
//   console.log(c);
//   sub();
//   function sub(){
//     a = 40;
//     b =30;
   
//   console.log(a-b);
//   }
// }
// "use strict"
// var a =10;
// let b= 20;
// a;
// c= 30;
// console.log(c)
// // function abc(){
// //   a =20;
// //   b=30;
// //   console.log(a);
// //   console.log(b);
// // }
// // abc();
// var a="shanth";
// var b="kumar";
// console.log(a+b);
// let a =10;
// let count = a++;
// console.log(count);
// console.log(a);
// a = "shanth" * 2;
// typeof(a);

// function demo(){
//     return foo;
//     foo=10;
//     function foo(){}
//     var foo='11';
// console.log(foo);
// }
// demo();

// var a = 5;
// var b = 6;
// //      0101
// //      0110
// //      0011
// console.log(a ^ b);
// // XOR ^

// A B C
// 0 0 0
// 0 1 1
// 1 0 1
// 1 1 0
// let age = 20;
// if(age>18){
//     console.log("He can vote");

// }
// else{
//     console.log("he can not");
// }

// let a = 0;
// if (a=0){
//     console.log("sunday");

// }
// else if(a=2){
//     console.log("friday")
// }
// let age = 5;
// switch(true){
//     case age<18:
//                 console.log("child");
//                 break;
//     case 18<age<40:
//                 console.log("adult");
//                 break;
//     default:
//                 console.log("Old age");
//                 break;
// }

// var day = "6";
// switch(day){
//         case "0":
//                 console.log("Monday");
//                 break;
//         case "1":
//                 console.log("Tuesday");
//                 break;
//         case "2":
//                 console.log("Wednesday");
//                 break;
//         case "3":
//                 console.log("Thursday");
//                 break;
//         case "4":
//                 console.log("Friday");
//                 break;
//         case "5":
//                 console.log("saturday");
//                 break;
//         case "6":
//                 console.log("Sunday");
//                 break;
//         default:
//                 console.log("please select 0 to 6");
//                 break;
// }
// var num=19;
// for(var i=1;i<=10;i++){
// console.log( num + "*" + i +"="+  (num*i));
// }

//07/03/2022
// let a=10;
// switch (a){
//     case 2:
//         console.log("it's 2");
//         break;
//     case 10:
//         console.log("it's 10");
//         break;
//     default:
//         console.log("default");
//         break;
// }
// switch(true){
//     case a<0:
//         console.log("Negative");
//         break;
//     case a>0:
//         console.log("positive");
//         break;
//     default:
//         console.log("zero");
//         break;
// }

// let a=0;
// for( ;a<10; ){
//     console.log(a);
//     a++;
// }

// let i=1;
// while(i<11){
//     console.log(i);
//     i++;
// }

// let i = 1 ;
// do{
//     console.log(i);
//     i++;
// }while(i<11)    
// for(var i=1; i<=4; i++){
//     console.log("* ".repeat(i));
//  }
// function sum(a ,b){
//     console.log(a+b)
// }
// sum(2, 3)
// let n = 3; // you can take input from prompt or change the value
//     let string = "";
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j <= i; j++) {
       
//         string += "*";
//         console.log(string);
//       }
//     }
    //  var a;
    //  console.log();
    //  a=10;

//     var x = 10

//     function a() {
//         var y = 20
//         function b() {
//             console.log(x, y)
//         }
//         b()
//     }
//     a()
    

// var s =a()


// let arr=[];
// var a=[];
// arr=[1,2,3,4];
// console.log(arr)
// console.log(arr.length);
// arr.push("go");
// console.log(arr);
// arr.unshift(0)
// console.log(arr);
// arr.pop(arr[0])
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(a)
// console.log(arr)
// arr[10]=12;
// console.log(arr);
// arr[1]=0;
// console.log(arr);
// arr[5]=5;
// console.log(arr);
// console.log(typeof(a))



// function countString (arr){
//     let count = 0;
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") count++;
//         // if (typeof(element)==="string") tempArr.push(element)
//     }
//     return count;
// }

// const result = countString(["a", "b", "c", 1, 3, 5]);
// console.log(result);

// 10/3

//   var f2= function( ){
//       console.log("ssssssss");
//   }
// //   f2()
// f3()

// function add(a, b) {
//     return a + b
// }

// var f3 =(a,b) =>{
//     return a+b
// }
// console.log(f3(4,5))

// var mul = (a,b) => a*b
// console.log(mul(5,3))
// function a(){
//     var x=10;
//     console.log(x)
// }


// var x = 10

// function a() {
//     var x = 20
//     function b() {
//         var x = 30
//         console.log(x, 'b') //30
//     }
//     b()
//     console.log(x, 'a') //20
// }
// console.log(x, 'global') //10
// a()

// fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('strawberry'))
// console.log(fruits.push('melon'))
// console.log(fruits)


// let result=fruits.indexOf('apple', 1)
// fruits.unshift('kiwi')
// console.log(result);
// console.log(fruits);
// let unshift=fruits.unshift('kiwi')
// console.log(unshift);
// console.log(fruits.length);
// fruits[0]=1;
// console.log(fruits);
// var fruits=['apple','banana','orange','apple']
// let a=fruits.slice(1,2)
// console.log(a);
// let b=fruits.slice(-3,-2)
// console.log(b)

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// console.log(fruits.push('strawberry', 'papaya', 'pear'))
// console.log(fruits.pop())
// console.log(fruits.shift())
// console.log(fruits.unshift('jackfruit'))
// let result = fruits.slice(0, 3)
// console.log(result)

// let arr=[9,1,2,3,4,5]
// function abc(element){
//     return element>4
// }
// let result =arr.findIndex(abc)

// console.log(result);



// let arr=[9,1,2,3,4,5]
// // arr.forEach(element =>{
// // console.log(element*2);})
// let sum=0;
// arr.forEach(item=>{
//     sum+=item;
// })
// console.log(sum);
// let salary = [100, 200, 300, 400, 500, 600]

// filter out salaries greater than 300

// double the filtered salaries

// find out the total salary


// let salary=[100,200,300,400,500,600]
// let finalArr=salary.filter(item=>item>300).map(item=>item*2).reduce(function(acc,current){
//     acc+=current
//     return acc
// },0)
// console.log(finalArr)


// let array=[1,2,3,4,5]
// let a=array.reduce(function(acc,curr){
//   acc=acc*curr;
//   return acc;
// });
// console.log(a)




// let a="hello"
// console.log(a);
// let b=`hell 0`
// console.log(a===b);
// a[0]="y";
// a='sh'
// console.log(a);
// console.log( a.charAt(0));
// let a="widget with id"
// console.log(a.indexOf("with"));
// console.log(a.slice(5));
// console.log(a);

// let user={
//    a:10,
//    b:20,
//    c:30

// }
// let sum=0;
// for(let key in user){
//     sum+=user[key]
// }
// console.log(sum);
// let user={
//     a:10,
//     b:20,
//     c:'string'
//  }

//  for (let key in user){
//     if (typeof(user[key])==='number'){
//         user[key]=user[key]*2
//     }
//  }
//  console.log(user);
// let user={
//     name:'shanth'
// }
// const admin=user
// console.log(admin);
// console.log(user);
// admin.name='virat'
// console.log(user);
// console.log(admin);
// admin.age=22
// console.log(user);
// console.log(admin);
// const a={
//     age:2
// }
// a.k=2
// console.log(a);
// delete a.age
// console.log(a);
// let a={
//     key:1
// }
// let b={
//     key:2
// }
// a=b
// console.log(a);
// console.log(b);
// let a={
//     name:'shan',
//     hi:function(){
//         console.log("hi",a.name);
//     }
// }
// b=a;
// a=null
// console.log(b.name);
// function sayHi(){
//     console.log(this.name);
// }
// let a={
//     name:'shanth'
// }
// let b={
//     name:'kumar'
// }
// a.fun=sayHi;
// b.fun=sayHi;

// // console.log(a.fun);
// sayHi()
// let a={
//     step:0,
//     up(){
//         this.step++
//     },
//     down(){
//         this.step--
//     },
//     show(){
//         console.log(this.step);
//     }
// }
// a.down()
// a.show()
// const a={
//     m:'ello'
//     thismesage(){
//         m:'ss'
//         return this.m
//     }
// }
// const obj = {
//     message: 'Hello, World',
//     getMessage() {
//         const message = 'Hello, Earth'
//         return this.message
//     }
// }

// let result = obj.getMessage()
// console.log(result);
// obj.getMessage()
// let obj = {
//     who: 'World',
//     greet: function () {
//         console.log(`Hello, ${this.who}`)
//     },
//     farewell: () => {
//         console.log(`Goodbye, ${this.who}`)
//     }
// }

// obj.greet()
// obj.farewell()
// let S="ADDAAADDDDD"
// let count = 0;
// let sum = 0;

  
//     for (let i = 0; i < S.length; i++) {

       
//         if (S.charAt(i) == 'A') {
//             count += 1;
//         }
//         else if (S.charAt(i) == 'D') {
//             sum += 1;
        
// }
//     }

// if (sum<count){
//     console.log("A");
// }
// else if(sum>count){
//     console.log("D");
// }
// else{
//     console.log(draw);
// }
// function a(){
//     console.log(this);
// }
// a();
// let b =()=>{
//     console.log(this);
// }
// b()
// let user={
//     ame:'shanth',
//     c(){
//         console.log(this.ame);
//     }
// }
// user.c()
// x=10;
// console.log(this.x);
// function a()
// {
//     console.log( this.name,'ss');
// }
// a()
// var message = 'Hello Earth'
// const obj = {
//     message: 'Hello, World'
// }
// function print() {
//     console.log(this.message)
// }

// print()
// print.call(obj)
// print.apply(obj)
// print.bind(obj)()
// let bind=print.bind(obj)
// bind()
// let a=document.getElementsByClassName("first");
// console.log(a[0].innerText);
// function click(){
// let value=document.getElementsById("p1").innerText;
//  value.innerText="Welcome"
//  console.log(value);
// }

// function click() { 
//     const userInput = document.getElementById("name");
//     const todo = document.createElement("h1");
//     todo.innerText = userInput.value;
//     todo.setAttribute("class", "todoDiv");
//     document.getElementById("todoData").appendChild(todo);
// }

// adding dynamic html 
// create an empty div tag and give it some id.
// capture the input field value
// create the element that you want to add in html.
// append the element inside the empty div tag.
// function clickme(){
    // document.getElementById("elevation").innerText="gggs"
    // document.getElementsByClassName("elevation").innerText="class"
//   
// document.getElementById("container").style.flexDirection="column"
// function getOption() {
//     var result=document.getElementById("text")
//     var result2=result.value
//     document.getElementById("output").innerText=result2
// }
// let a= document.querySelector('li').innerText
// console.log(a);
// function getOption() {
//         var result=document.getElementById("text")
//         var result2=result.value
//         document.getElementById("output").innerText=result2
//     }
function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);





function settime(){

    var x=document.getElementById('morning').value;
    var y = document.getElementById("afternoon").value;
    var z = document.getElementById("evening").value;
    var hour = new Date().getHours();
   

    if(x==hour){

        document.getElementById('imgcontainer').style.backgroundImage="url(./images/wakeup.PNG)"
        document.getElementById('textcontainer').innerText='Wake Up !!';
        document.getElementById("smallbox").innerText="Good Morning !!";
    }

    if(y==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url(./images/lunch.PNG)"
        document.getElementById("textcontainer").innerText="Let's Have Some Lunch !!";
        document.getElementById("smallbox").innerText="Good Afternoon !!";
    }

    if(z==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url(./images/night.PNG)"
        document.getElementById("textcontainer").innerText="Good Night !!";
        document.getElementById("smallbox").innerText="Good Night !!";
    }    
    
}