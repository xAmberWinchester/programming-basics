//IN DE LES GEDAAN:

//OPDRACHT 1:
console.log('Opdracht 1:');
const lapRounds = {
    0: 55.99,
    1: 63.00,
    2: 63.01, 
    3: 54.01, 
    4: 62.79, 
    5: 52.88, 
    6: 53.10, 
    7: 54.12
}; 
console.table(lapRounds);
//rondentijden in een tabel zetten, vanuit een soort van array

//OPDRACHT 2:
console.log('Opdracht 2:');
const teachers = [
    {
        name: "Loek",
        profession: "teacher",
        brand: "Linux"
    },
    {
        name: "Daan",
        profession: "teacher",
        brand: "Arduino"
    },
    {
        name: "Rimmert",
        profession: "teacher",
        brand: "Apple",
    },
]

for (let i = 0; i < teachers.length; i++) {
    let element = teachers[i];
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer.`)
    // i have a ... named ... and he likes to work on a ... computer.
}


//OPDRACHT 3:
console.log('Opdracht 3:');

const docenten = [
    {
        name: "Loek",
        profession: "teacher",
        brand: "Linux",
        hoursPerWeek: 35,
        salary: 860,
        salaryPerHour: function(){
            const salaryPerHour = this.salary / this.hoursPerWeek;
            return salaryPerHour;
        }
    },
    {
        name: "Daan",
        profession: "teacher",
        brand: "Arduino",
        hoursPerWeek: 30,
        salary: 850,
        salaryPerHour: function(){
            const salaryPerHour = this.salary / this.hoursPerWeek;
            return salaryPerHour;
        }
    },
    {
        name: "Rimmert",
        profession: "teacher",
        brand: "Apple",
        hoursPerWeek: 25,
        salary: 860,
        salaryPerHour: function(){
            const salaryPerHour = this.salary / this.hoursPerWeek;
            return salaryPerHour;
        }
    },
    
]
for (let i = 0; i < docenten.length; i++) {
    console.log(docenten[i]     )
    let element = docenten[i];
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer and he earns €${element.salaryPerHour()} per hour.`)
}
// i have a ... named ... and he likes to work on a ... computer and he earns ... per hour.
