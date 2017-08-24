module.exports = {
    reqHeader:{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    },
    api:{
        path:'http://api.douban.com/v2'
    }
}
