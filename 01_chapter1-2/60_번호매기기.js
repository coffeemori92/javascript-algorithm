const students = ['강은지', '김유정', '박현서', '최성훈', '김채리', '한지호'];
students.sort();
console.log(students);

for(let i = 0; i < students.length; i++) {
  console.log(`번호: ${i + 1}, 이름: ${students[i]}`);
}