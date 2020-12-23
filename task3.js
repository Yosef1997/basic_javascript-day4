//no.3
const cekFoodStok = (type) =>{
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const dataFood = ['wafer', 'cookies', 'instant noodle', 'donut', 'pocky']
            let cek = dataFood.find((item) => {
                return item === type
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Stock Empty', []))
            }
        },3000)
    }).then(result => {console.log(result)})
    .catch(error => {
        console.log(error)})
}
cekFoodStok('meat')

const brandCar = (brand) =>{
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const dataBrand = ['ferarri', 'porsche', 'bmw', 'honda', 'toyota','nissan']
            let cek = dataBrand.find((item) => {
                return item === brand
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error("brand not found", []))
            }
        },3000)
    })
}

const getData = async (data) => {
    try{
        const result = await brandCar(data)
    console.log(result)
    }catch(error){
        throw error
    }
    finally{
        console.log("searching done")
    }
}

getData('honda')