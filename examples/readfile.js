//importing module inside node
// const fs = require('fs')
// fs.readFile("hello_world.js", 'utf8', (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

const fs = require('fs')
fs.readFile("date.js", 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data)
})

