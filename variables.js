// console.log(b);
//     let a=5;
//     var b=7;
// console.log(a);

// let data=true;
// if (data){
//     console.log("true")
// }else {
//     console.log("false")
// };
// var d="not a number"**0;
// console.log(d);
// let name="david";
// alert(`Hello ${name} qalesan`);
// console.log(typeof(x));


// let value = true;
// value = String(value);
// console.log(typeof value)


// let a=[5];
// b=a
// // console.log(a);
// a=[7];
// console.log(a);
// console.log(b);


// let string="1234"
// let num=Number(string);
// console.log(num);
// console.log(typeof num);
// let text=String(num);
// console.log(text);


// let a=234232%2;
// console.group(a);
// let b=2**5;
// console.log(b);
// let c=10*20/5*2+70*2;
// console.log(c);
// let d=10;
// d+=5;
// d*=2;
// console.log(d);
// let e= 1;
// let f= ++e;
// console.log(f);
// console.log(e);
// let g=5
// --g;
// g--;
// g++;
// console.log(g);
// let number=5;
// value1=10;
// value2=10;
// value3=10;

// value1+=number
// value2/=number
// value3%=number
// console.log(value3)

// let h=5==5;
// let i=5==="5";
// console.log(i)


// let a=3>2;
// console.log(a);
// //18-25 => 15
// // 26-35=> 20
// //36-50=> 25
// //51-99=> 30
// const age=25.2;
// if (age>=18 && age<=25){
//     console.log("15%");
// }else if (age>=26 && age<=35){
//     console.log("20%");
// }else if (age>=36 && age<=50){
//     console.log("25%");
// }else if (age>=51 && age<=99){
//     console.log("30%");
// }else{
//     console.log("age is not compatible");
// };
// (age>18) ? console.log("narmalniy brat") : console.log("patsan brat");

// let str1="ac0";
// let str2="acb";
// (str1>str2) ? console.log("string1 is greater") : (str1=str2) ? console.log("equal") : console.log("string1 is less");
// let input=prompt("enter my birth year");
// if (input==1997){
//     console.log("you are right")
// }else{
//     console.log("you are wrong")
// };

//string + boolean, string + number, number + boolean
let a="salom";
let b=true;
let c=5;
console.log(a+b);//actual result "salomtrue"
console.log(a+c);//actual result "salom5"
console.log(b+c);//actual result 6
//string * boolean, string * number, number * boolean
console.log(a*b);//actual result "Nan"
console.log(a*c);//actual result "NaN"
console.log(c*b);//actual result 5
//string / boolean, string / number, number / Boolean
console.log(a/b);//actual result "Nan"
console.log(a/c);//actual result "Nan"
console.log(c/b);//actual result 5
// Explicit conversion
//number
let fetchedvalue="10072022";
let changevalue=Number(fetchedvalue);
console.log(changevalue); //actual result 10072022
//string
let data=true;
let string=String(data);
console.log(string); //actual result "true"(showing as string)
//boolean
let input=undefined;
let boolean=Boolean(input);
console.log(boolean); //actual result "false"