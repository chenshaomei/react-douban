import {  REQUESTDATA, GET_DETAILSDATA } from '../actions/details';

export default function list(state = {
  isFetching: true,
  detailsData: {}
}, action){
    switch (action.type) {
        case REQUESTDATA:
            return Object.assign({}, state, {
                isFetching:true
            })
        case GET_DETAILSDATA:
            return Object.assign({}, state, {
                detailsData: action.detailsData,
                isFetching:false
            })

        default:
            return state
    }
}
