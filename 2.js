// JSON, который мы будем парсить
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   
}`;

const object = convertJsonToJs(jsonString)

function convertJsonToJs (jsonString) {
    // получение данных
    const result = JSON.parse(jsonString);

    return result
}

createNewDataStructure (object);

function createNewDataStructure (object) {
    const employers = object.list;

    let jsEmployers = [];
    
    //перебираем элементы и записываем в результирующий массив
    employers.forEach(employer => {

        const person = {         
           name: employer.name,
           age: Number(employer.age),
           prof: employer.prof
        }

        jsEmployers.push(person);
        
    });
      
    const result ={
        list: jsEmployers
    }
    
    console.log(result);
}
