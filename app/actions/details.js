import request from '../libs/request';

export const GET_DETAILSDATA = 'GET_DETAILSDATA';
export const REQUESTDATA = 'REQUESTDATA';

let details = {
    getDetails : (id)=>((dispatch, getState)=>{

        dispatch(details.requestData())
        request.get(`/api/movie/${id}`).then((res)=>{
            dispatch(details.receiveDetailsData(res))
        })
    }),

    requestData: ()=>({
        type:REQUESTDATA,
        isFetching: true
    }),
    receiveDetailsData : (data)=>({
        type:GET_DETAILSDATA,
        detailsData: data,
        isFetching: false
    })
}

export default details;
