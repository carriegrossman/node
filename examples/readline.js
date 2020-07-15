const fs = require('fs')
fs.readFile("text.txt", 'utf8', (err, data)=>{
    let textArr = data.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);
    let indx = 0;
    let cycle = setInterval(()=>{
        console.log(textArr[indx])
        indx++;
        if(indx >= textArr.length){
            clearInterval(cycle)
        }
    }, 1000)
})