import 'isomorphic-fetch';
import queryString from 'query-string';//查询字符串格式转换
import config from './config';
let request = {};

/**
 * GET http
 *
 * 基于 isomorphic-fetch 的 get 请求处理
 *
 * @param    {string}   url       请求url
 * @param    {object}   options   查询参数
 * @returns  {}                   返回数据
 *
 * @date     2017-07-19
 * @author   CHENSHAOMEI<csm821858141@163.com>
 */

request.get = (url, options) => {

    if(options){
        url+='?'+queryString.stringify(options);
    }
    return fetch(url)
        .then((response) => {
            return response.json()
        }).then(function(json) {
            return json
        }).catch((err) => {
            console.log('parsing failed', err)
        })
}


/**
 * POST http
 *
 * 基于 isomorphic-fetch 的 post 请求处理
 *
 * @param    {string}   url       请求url
 * @param    {object}   options   查询参数
 * @returns  {}                   返回数据
 *
 * @date     2017-07-19
 * @author   CHENSHAOMEI<csm821858141@163.com>
 */

request.post = (url, options) => {
    options = Object.assign(config.reqHeader, {
        body: JSON.stringify(options)
    });

    return fetch(url, options)
        .then((response) => {
            return response.json()
        }).then((json) => {
            return json
        }).catch((err) => {
            console.log('post failed data:' + err)
        })
}

module.exports = request;
