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

    const errors = [];
    if (name === "" || name === 0) {
        errors['nameErr'] = "Your name is required";
    }
    // } else if (!isString(name)) {
    //     errors[1] = "Please enter valid name";

    // }
    if (title === "" || title === 0) {
        errors['titleErr'] = "Title is required";
    }
    let errs = "";
    for (let i in errors) {
        // console.log(errors[i]);
        errs += errors[i] + "<br>";
    }
    document.getElementById('errors').innerHTML = errs;
    document.getElementById('errors').style.color = "red";
    // document.getElementById('errors').style.backgroundColor = "blue";
    // console.log(Object.keys(errors))
    if ('nameErr' in errors) {
        document.getElementById('nameErr').innerHTML = "Your name is required";
    }

    if (!errors) {
        document.querySelector('#username').innerHTML = name;
        document.querySelector('#usertitle').innerHTML = title;
    }

})


function getfilesDetails() {
    let file = form1['upload'].files[0];
    let size = (parseInt(file.size) / 1024).toFixed(2);
    let imagename = file.name;
    let lastmodfy = file.lastModifiedDate
    document.getElementById('img').src = "images/" + imagename
    document.querySelector('#imageinfo').innerHTML = `Name: ${imagename} <br>
    Size: ${size} MB <br> Modified Date: ${lastmodfy} <br>
    `

}

// function sum(){
//     //
// }

// const sum = c => {

//     return c;
// }

// console.log(sum(23));