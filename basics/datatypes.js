"use strict";//treat all js code as newer version
//alert(4+4)//it is nodejs mot browser
const accountId=1234
var accountPassword="12345"
let accountEmail="abc.gmail.com"
 let account_city="noida"
let state='c';
var phoneNumber=912345567
console.log(typeof accountId)
console.log(typeof accountPassword)
console.log(typeof accountEmail)
console.log(typeof account_city)
console.log(typeof account_city)
console.log(typeof phoneNumber)
console.log(typeof state)
console.table([accountId,accountPassword,accountEmail,account_city,phoneNumber, state])

// note: null ka typeof se daattype object ata hai; 

// two types of datatypes in js  based on the way they stores and acess in memory
// 1.primitive : String,Boolean ,Number,symbol,null,undefined,BigInt
let s="ram"
let q=true
let c=3
let a=null
let h;//undeifned
let x=23n//n at lasst tell bigint
let d=Symbol('123')
let n=Symbol('123') //they both have treated idfferently symbol

console.log(b)
console.log(d==n)

/*.non-primitive
Array,objects,function*/
let myArray=["1",'2','3']
console.log(myArray)
 
{
  let  name="prashnat"
    age='20'
}
const myFunc=function(){

    console.log("hello ")
}