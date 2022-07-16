//string + boolean, string + number, number + boolean
let a="salom";
let b=true;
let c=5;
console.log(a+b);//result "salomtrue"
console.log(a+c);//result "salom5"
console.log(b+c);//result 6
//string * boolean, string * number, number * boolean
console.log(a*b);//result "Nan"
console.log(a*c);//result "NaN"
console.log(c*b);//result 5
//string / boolean, string / number, number / Boolean
console.log(a/b);//result "Nan"
console.log(a/c);//result "Nan"
console.log(c/b);//result 5
// Explicit conversion
//number
let fetchedvalue="10072022";
let changevalue=Number(fetchedvalue);
console.log(changevalue); //result 10072022
//string
let data=true;
let string=String(data);
console.log(string); //result "true"(showing as string)
//boolean
let input=undefined;
let boolean=Boolean(input);
console.log(boolean); //result "false"