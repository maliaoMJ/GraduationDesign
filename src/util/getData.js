import 'whatwg-fetch'

//通过get的方式请求数据

function getDataByGet (url) {

    let result = fetch(url)

    return result
}


function getDataByPost (url,postData){
    
    let result = fetch(url, {
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(postData)
    })
    return result
}

export default {
    getDataByGet,
    getDataByPost
}
// 若果含有表单
//参考
// var form = document.querySelector('form')

// fetch('/users', {
//     method: 'POST',
//     body: new FormData(form)
// })


// fetch('/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Hubot',
//         login: 'hubot',
//     })
// })