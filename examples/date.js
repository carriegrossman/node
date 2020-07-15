let today = new Date();

let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let dateTime = date+' '+time;

console.log(dateTime)