const student = {
    name: 'Prosen',
    age: 25,
    district: 'jessore',
    father: 'Sanjit Biswas',
    mother: 'Krishna Biswas'
}

const keys = Object.keys(student);

for(const key of keys){
    const value = student[key];
    console.log(value);
}