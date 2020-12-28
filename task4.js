const fetch = require('node-fetch')
const getData = async() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then((data) => {
        data.map((items) => {
            console.log(items.name)
        })
    })
}

getData()
