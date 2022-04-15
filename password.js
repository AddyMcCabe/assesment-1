const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('hello user')
reader.question('What is your password?', function(answer){
    if(answer.length >= 10){console.log ('your password is accepted!')}
    else {console.log ('your password is not valid')}
    reader.close()})