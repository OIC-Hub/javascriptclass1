// const users = ['Sunday Opeyemi', 12, 'Osogbo'];
// const numbers = new Array(12, 45, 6, 7, 8, 8);
// console.log(users[2])
// console.log(users[0])
// console.log(numbers)
// const nums = [];
// nums[0] = 1;
// nums[1] = 20;
// nums[2] = 100;
// console.log(nums.length) // lenth of arrray
// Methods and properties of array
// arr.splice 
// users.splice(1, 0, 'sunday@oichub.org', '08102519926'); //  use it to  inserting new values without deleting
// users.splice(1, 2, 'sunday@oichub.org', '08102519926');  use it to remove and inserting new values
// users.splice(1, 2);
/* Slice method
  arry.slice(start, end)
*/
// console.log(numbers.slice(2, 3));
// console.log(users);
/*
pop(), shift(), unshift(), push()
*/
// users.pop()
// users.shift()
// console.log(users)
// users.push('Joshua Dariye')
// console.log(users)
// users.unshift('Joshua')
// console.log(users)
/*
 Introduction to Javascript Object
*/
// const user = { name: 'Sunday', age: 10, email: 'omolewu12@gmail.com' }
// console.log(user.email)
// console.log(user['name']);
/* 
 for(statement1; statement2; statement3){
    //code
 }
*/
let num = "";
for (let i = 1; i <= 100; i++) {
    // num += "Number=" + i + "\n";
    if (i % 2 == 0) {
        num += "THe number is even number" + i + "\n";
    } else {
        num += "THe number is odd number" + i + "\n";
    }
}
console.log(num);