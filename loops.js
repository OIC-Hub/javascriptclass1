// let i = 0;
// const nums = []
// for (; ;) {
//     if (i < 100) {
//         nums[i] = i + 1;
//         i++
//     } else {
//         break;
//     }

// }
// console.log(nums)
const names = ['sunday', 'Joshua', 'Ben', 'Peace', 'Mariam', 'Aminat'];
let len = names.length;
let i = 0;
let usernames = "";
for (i; i < len; i++) {
    if (names[i] == 'Ben') {
        usernames += "Agba developer <br>";

    } else {
        usernames += names[i] + "<br/>";
    }
}
// document.getElementById('loops').innerHTML = text;

/*  For in loop   */
const username = {
    name: "Sunday Opeyemi",
    age: 12,
    address: 'Lagost Island',
    email: 'Sunday@oichub.org'
}
// for (let keys in username) {
//     console.log(username[keys]);
// }
const nums = [12, 13, 56, 78, 90, 78, 45, 78, 89, 09];

for (let i in nums) {
    console.log(nums[i])
}
/* For of */
let nu = "Hello Number";
for (let values of nums) {
    nu += values + "<br/>";
}
document.getElementsByClassName('nums')[0].innerHTML = nu;

// To get the object values
const nam = []
let a = 0
for (let value of nums) {
    nam[a] = value;
    a++
}
document.querySelector("#names").innerHTML = nam;