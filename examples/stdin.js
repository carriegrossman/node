console.log('This is a good place to stop')

process.stdin.on('data',()=>{
    console.log('next paragraph')
})

console.log('now we continue')