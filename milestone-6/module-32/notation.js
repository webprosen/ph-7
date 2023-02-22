const student = {
    name: 'Me',
    age: 15,
    class: 10,
    marks: {
        math: 67,
        physics: 98,
        chemistry: 100
    }
}

const math = student.marks.math;
const physics = student['marks']['physics'];
const subject = 'chemistry';
const marks = student['marks'][subject]

console.log(math, physics, marks);