

async function getdata(url) {
    let response = await fetch(url)
    let data = await response.json()

    console.log(data[0])


}
getdata('https://api.dictionaryapi.dev/api/v2/entries/en/hello');



// }
// catch (error) {
//     console.log(error);
// }


fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(data)
    }).catch(error => console.log(error))

axios.get(url)
    .then(res => {
        console.log(res)
    }).catch(error => {
        console.log(error)
    })