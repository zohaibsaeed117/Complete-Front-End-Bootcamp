// Asynchoronos
const fs=require('fs');
let text=fs.readFile("abc.txt",'utf-8',(err,data)=>{
    console.log("Success!",data);
});
console.log("this is a msg")