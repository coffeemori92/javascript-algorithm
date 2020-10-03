const students = [
  '강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호'
];

students.sort();
console.log(students);

for(let key in students) {
  console.log(`번호: ${parseInt(key, 10) + 1}, 이름: ${students[key]}`);
}