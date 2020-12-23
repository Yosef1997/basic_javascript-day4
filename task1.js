//no.1
const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja', []))
            }
        },3000)
    }).then(result => {console.log(result)})
    .catch(error => {
        console.log('error')})
}
cekHariKerja('sabtu')

//then and catch digunakan pada promise asynchronous, dimana then akan mengembalikan resolve bila promise terpenuhi
// dan catch akan mengembalikan reject bila promise tidak terpenuhi

const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja', []))
            }
        },3000)
    })
}

const getData = async (data) => {
    try{
        const result = await cekHariKerja(data)
    console.log(result)
    }catch(error){
        throw error
    }
}

getData('jumat')

//try dan catch punya peran sama seperti then dan catch namun try and catch digunakan pada function promise
//synchronous setelah mengubah promise asynchronous menjadi synchronous dengan asynch/await 
