import request from '../libs/request';

export const FINDRQESTDATA = 'FINDRQESTDATA';
export const GET_FINDRESULTLIST = 'GET_FINDRESULTLIST';



let findresult = {
    getMoreList: (options) => ((dispatch, getState)=>{
        options.pageNo = options.pageNo || 1;
        options.count = options.count || 10;
        options.start = (options.pageNo-1) * options.count;

        if (!getState().isFetching) {
            dispatch(findresult.requestData(options.pageNo)); //loading
            request.get('/api/movie/search', options ).then((res)=>{
                dispatch(findresult.hasGetMoreList(res))
            })


        }
    }),

    requestData:(pageNo)=>({
        type:FINDRQESTDATA,
        pageNo:pageNo,
        isFetching:true
    }),

    hasGetMoreList:(data)=> ({
        type: GET_FINDRESULTLIST,
        findResultList:data.subjects,
        start:data.start,
        totalPage:(''+(data.total/data.count)).indexOf('.')==-1?(data.total/data.count): parseInt(data.total/data.count)+1
    })
}

export default findresult;
