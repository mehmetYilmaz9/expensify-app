console.log('destructuring');

////OBJECT DESTRUCTURING
/*
const person = {
    name: 'Andrew',
    age: 25,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name, age } = person;

console.log(`${person.name} is ${person.age}`)

const book = {
    title: 'The count of monte cristo',
    author:'Dumas',
    publisher: {
        name: 'Edition'
    }
};

const {name: PublisherName} = book.publisher;

console.log(PublisherName); */

/////ARRAY DESTRUCTURING
/*
const address = ['13 RUE JEAN-MARIE MEZEIRES', 'DRANCY', 'FRANCE', '93700'];
const [street, city, state, zip] = address;

console.log( `You are in ${city} ${street}`);*/

const idem = ['Coffee (hot)', '$2.00', '$2.50', '$3'];
const [coffee , ,priceMedium] = idem;

console.log(`A medium ${idem[0]} costs ${idem[2]} `);

console.log(`A medium ${coffee} costs ${priceMedium} `);

