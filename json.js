

let details = '{"name": "Sunday Omolewu", "age":12, "address": "Osogbo"}';
let data = JSON.parse(details);
data = JSON.stringify(data);
console.log(data.name);