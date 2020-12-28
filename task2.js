//no.2
const getmonth = (callback) => {
    setTimeout (() =>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 
        'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}


function result(output, item){
    if(output == null){
        item.map((e) => {console.log(e)}) 
    } else{
        console.log(output)
    }
}

getmonth(result)
