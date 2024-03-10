//object is created in two ways using constructer and using literals.
//constructor se object banega to singelton hoga
//literal se banga to singelton nhi hoga
const mysym=Symbol("key")
const jsuser={
    name:"Ramesh",
    age:75,
    eid:"453",
    Logged:true,//note here key is treated as string type; to use symbol datatype as keyuse bracket square
    [mysym]:"mykey"

}
console.log(jsuser);
console.log(jsuser.name);
jsuser.name="Prashant";//if we frreze the attribut then no change permits.Object.freeze(js.user);
o=jsuser;
console.log(o);
console.log(jsuser);
// merge two objects
obj={
    1:"a",2:"s"
}
console.log(Object.assign(obj,jsuser));//not here mereging occur in first passed object
console.log(jsuser);
//2nd way to do this
//console.log(...jsuser,...obj)//here an new object return so we need to store it and then print it.
const obj3={
    ...jsuser,...obj
}
console.log(obj3);
//return key
console.log(Object.keys(jsuser));//similarly we get value;
console.log(Object.entries(jsuser));
