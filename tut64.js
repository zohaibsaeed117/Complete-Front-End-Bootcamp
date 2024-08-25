const fs=require('fs');
let text=fs.readFileSync("abc.txt",'utf-8');
text=text.replace('janu','Zaibi');
console.log(text)

fs.writeFileSync("123.txt",text)
