'use strict';

let str,
  arr,
  result;

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  str = fruits.toString();
  console.log(str);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  arr = fruits.split(', ');
  console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  arr = array.reverse();
  console.log(arr);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  arr = array.splice(2, 3);
  console.log(arr);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  result = students.filter(student => student.score >= 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  arr = students.filter(student => student.enrolled === true);
  console.log(arr);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
let scores = [];
{
  for(const student of students) {
    scores.push(student.score);
  }
  console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
  let average,
    sum = 0;
  for(const i in scores) {
    sum += scores[i];
  }
  average = sum / scores.length;
  console.log(average)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  str = scores.toString();
  console.log(str);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
