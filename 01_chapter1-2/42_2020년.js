const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const userInput = '5 24'.split(' ');
console.log(userInput);

const month = userInput[0] < 10 ? `0${userInput[0]}` : userInput[0];
console.log(month);

const day = userInput[1] < 10 ? `0${userInput[1]}` : userInput[1];
console.log(day);

const date = new Date(`2020-${month}-${day}`);
console.log(days[date.getDay()]);