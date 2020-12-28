const fetch = require('node-fetch')
const getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then((data) => {
        data.map((items) => {
            console.log(items.name)
        })
    })
}

getData()
