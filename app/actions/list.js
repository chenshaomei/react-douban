import request from '../libs/request';

export const RQESTDATA = 'RQESTDATA';
export const GET_MORELIST = 'GET_MORELIST';



let list = {
    getMoreList: (options) => ((dispatch, getState)=>{
        options.pageNo = options.pageNo || 1;
        options.count = options.count || 10;
        options.start = (options.pageNo-1) * options.count;

        if (!getState().isFetching) {
            dispatch(list.requestData(options.pageNo)); //loading
            request.get(options.url,{start:options.start,count:options.count}).then((res)=>{
                dispatch(list.hasGetMoreList(res))
            })
        }
    }),

    requestData:(pageNo)=>({
        type:RQESTDATA,
        pageNo:pageNo,
        isFetching:true
    }),

    hasGetMoreList:(data)=> ({
        type: GET_MORELIST,
        moreList:data.subjects,
        start:data.start,
        totalPage:(''+(data.total/data.count)).indexOf('.')==-1?(data.total/data.count): parseInt(data.total/data.count)+1
    })
}

export default list;
