// console.log("welcome ");
// var b=12; //var scope ke bahar andar dono jagah kam krta haii
// const a=14; //reinitialize nhi kr skte value
// console.log(a);
// if(a>10){
//     let b=23; //scope paii kam krta haii
//     a=30;
//     console.log("a inside condition:"+a);
// }
// console.log("b outside condition:"+b);

let a=12;
let b="a";
console.log(typeof(b));
let today=Date();
console.log(today);
if(a==b) //a===b content ke sath sath type pr bhi kam krta haii
         //a==b content pr kam krta haii
{
    console.log("welcome");
}
else{
    console.log("hello");
}
let myname="aditya";
let college="abesec";
let result='hi, my name is $(myname) and i am doing engineering from $(college)' ;
console.log(result);

//objects in js
// let key="sname";
const student=[{  //array of object
    sname:"aditya",
    course:"Btech",
    college:"Abesec"
},
{
    sname:"harsh",
    course:"Btechcs",
    college:"Abes"
}
]
console.log(student[1]);
// console.log("name:" +student.sname + "course:" +student.course);
// const {sname}=student;//destructuring
// console.log(sname);
// student[key]="rahul";
// console.log(student);
// console.log()

//fuction

// function greeting(msg="welcome"){
//     console.log("good morning:"+msg);
// }
// greeting("greetings"); //parameter ko optional bna diya humne

// function sum(a,b,c=56){
//     return a+b+c;
// }
// let data=sum(12,20); //automatically value discard krdi
// console.log(data);

//callback function

// function selectlanguage(language){
//     let data;
//     if(language=='c'){
//     function cCompiler(){
//         return "cCompiler selected";
    
//     }
//     data=cCompiler();
// }
//    if(language=="java")
//    {
//     function javaCompiler(){
//         return "javaCompiler";
//     }
//     data=javaCompiler();
// }
// return data;

// }
// let data1=selectlanguage("c");
// console.log(data1);

console.log("hello world");
document.getElementsByClassName("parent1");
console.log(parent1);
parent1[0].innerText="<h2 style=color:red >Data has changed</h2>";

