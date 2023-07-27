const findTheOldest = function(people) {
    let newPeople = people.map(person => {
        if(!person.yearOfDeath) {
            person.yearOfDeath = (new Date()).getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
        return person;
    })
    console.log(newPeople);

    let sortedPeople = newPeople.sort( (person1, person2) => person1.age > person2.age ? -1 : 1);
    console.log(sortedPeople[0]);
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
