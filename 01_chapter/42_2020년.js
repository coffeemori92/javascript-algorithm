const days =['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const month = '5';
const date = '5';

const solution = (a, b) => {
  const theDay = new Date(`2020-${a}-${b}`);
  console.log(days[theDay.getDay()]);
};

solution(month, date);