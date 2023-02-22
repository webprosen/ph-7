class TeamMember{
    name;
    loaction;
    constructor(name, loaction){
        this.name = name;
        this.loaction = loaction;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instructor extends TeamMember{
    designation = 'Web Mentor';
    team = 'Web Team';

    constructor(name, location){
        super(name, location);
    }

    startSupportSession(time){
        console.log(`Start the support session ar ${time}`);
    }
    createQuiz(lesson){
        console.log(`Please create quiz for module ${lesson}`);
    }
}

class Developer extends TeamMember{
    designation = 'Web Developer';
    team = 'Web & Apps';
    tech;

    constructor(name, loaction, tech){
        super(name, loaction);
        this.tech = tech;
    }

    developFeature(feature){
        console.log(`Please add this ${feature}`);
    }
    release(version){
        console.log(`Please release this ${version}`);
    }
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos';
    team = 'SCIC';
    region;

    constructor(name, location, tech){
        super(name, location);
        this.region = region;
    }

    provideResume(resume){
        console.log(`Please add this ${resume}`);
    }
    preparedStudent(student){
        console.log(`Please release this ${student}`);
    }
}

const prosen = new Instructor('Prosen Biswas', 'Dhaka', 'PHP');

console.log(prosen);