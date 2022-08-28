

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        let firstuser = data[0];
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].id)
        }
        console.log(firstuser)
    }
    )