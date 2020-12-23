//no.4
const getData = async() =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(await data.json())
    .then((data) => {
        data.map((i) => {
            console.log(i.name)
        })
    })
}

getData()