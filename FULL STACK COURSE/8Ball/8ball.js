var username = 'Pieter';
username ? console.log(`Hello ${username}`):console.log('Hello');

var userquestion = 'What does the future hold?';
console.log(`${username} asked "${userquestion}"`);

let random = Math.round(Math.random()*8);

//console.log(random);

let eightball = '';

switch (random){
  case 1:
  eightball = 'It is certain'
  break;
  case 2:
  eightball = 'It is decidedly so'
  break;
  case 3:
  eightball = 'Reply hazy try again'
  break;
  case 4:
  eightball = 'Cannot predict now'
  break;
  case 5:
  eightball = 'Do not count on it'
  break;
  case 6:
  eightball = 'My sources say no'
  break;
  case 7:
  eightball = 'Outlook not so good'
  break;
  case 8:
  eightball = 'Signs point to yes'
  break;
}

console.log(`Magic Eightball says ${eightball}`)
