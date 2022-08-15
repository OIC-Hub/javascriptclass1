// document.getElementById('userName').value = "Adeojo Mariam";
// // console.log(userName);

// console.log(document.getElementById('reg').innerHTML)


// let form = document.getElementsByClassName('form1')[0]
// function getNameValue() {
//     let form1 = document.forms['form1'];
//     let name = form1['name'].value;
//     console.log(name);
// }
// const getForm = e => {
//     e.preventDefault();
//     alert("HI")
// }
let form1 = document.forms['form1'];
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = form1['name'].value;
    let title = form1['title'].value;
    let file = form1['upload'].files[0];
    console.log(file);
    if (name === "" || name === 0) {
        document.getElementById('nameErr').innerHTML = "Your name is required";
    }
})



// function sum(){
//     //
// }

// const sum = c => {

//     return c;
// }

// console.log(sum(23));