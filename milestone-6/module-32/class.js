class Instructor {
    name;
    designation = 'Web mentor';
    team = 'Web Team';
    loaction;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    startSupportSession(time){
        console.log(`Start the support session ar ${time}`);
    }
    createQuiz(lesson){
        console.log(`Please create quiz for module ${lesson}`);
    }
}

const prosen = new Instructor('Prosen Biswas', 'Dhaka');

prosen.startSupportSession('5PM');
prosen.createQuiz(45);