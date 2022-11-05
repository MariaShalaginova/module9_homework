// XML, который надо парсить
let xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

// Создание экземпляра класса DOMParser
let parser = new DOMParser();

let result = [];

// парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// получение DOM-Node
const students = xmlDOM.querySelectorAll("student");

//перебираем элементы и записываем в результирующий массив
students.forEach(node => {
  let student = {
    name: `${node.querySelector("first").textContent} ${node.querySelector("second").textContent}`,
    age: node.querySelector("age").textContent,
    prof: node.querySelector("prof").textContent,
    lang: node.querySelector("name").getAttribute("lang")
  }
  result.push(student);
});

// console.log(result);