const now = new Date();

console.log(Math.floor(now.getTime() / (60*60*24*365*1000)) + 1970);