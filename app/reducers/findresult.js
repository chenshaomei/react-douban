import { FINDRQESTDATA, GET_FINDRESULTLIST } from '../actions/findresult';

export default function list(state = {
  isFetching: false,
  findResultList: []
}, action){
    switch (action.type) {
        case FINDRQESTDATA:
            return Object.assign({}, state, {
                isFetching:true,
                pageNo:action.pageNo
            })
        case GET_FINDRESULTLIST:
            return Object.assign({}, state, {
                findResultList: [...state.findResultList, ...action.findResultList],
                isFetching:false,
                totalPage: action.totalPage
            })

        default:
            return state
    }
}
