

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        let table = `
        <table><tr>
        <th>S/N</th>
        <th>Name</th>
        <th>Username</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>
        </tr>
        `;

        for (let i = 0; i < data.length; i++) {
            table += `<tr>
            <td> ${data[i].id} </td>
            <td> ${data[i].name} </td>
            <td> ${data[i].username} </td>
            <td> ${data[i].phone} </td>
            <td> ${data[i].email} </td>
            <td> ${data[i].address.suite}
                 ${data[i].address.street}
                 ${data[i].address.city}
           </td>
           </tr>`

        }
        table += "</table>";
        document.getElementById('table').innerHTML = table;
    }
    )