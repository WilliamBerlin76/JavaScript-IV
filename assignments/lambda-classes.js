// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject){
        return `today we are learning about ${subject}`;
    }
    grade(Student, subject){
        return `${Student.name} recieves a perfect score on ${subject}`;
    }
};

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        this.favSubjects.forEach(function(item){
            console.log(item)
        })
    }
    PRAssignment(subject){
        return `${Student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${Student.name} had begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
    }
}

const britt = new Instructor({
    name: 'Britt',
    age: '???',
    location: 'Canada',
    favLanguage: 'JavaScript',
    specialty: 'teaching code',
    catchPhrase: 'time for a break-out session!'
});

const will = new Student({
    name: 'Will',
    age: 23,
    location: 'Houston',
    previousBackground: 'Musician/Student',
    className: 'web23',
    favSubjects: ['JavaScript', 'HTML', 'CSS']
});

const arthur = new ProjectManager({
    name: 'Arthur',
    age: '??? immortal',
    location: 'where he is',
    favLanguage: 'JavaScript',
    specialty: 'teaching code',
    catchPhrase: '*insert zoom link',
    gradClassName: 'CS one of them',
    favInstructor: britt.name
})