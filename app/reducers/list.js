import { RQESTDATA, GET_MORELIST } from '../actions/list';

export default function list(state = {
  pageNo: 1,
  isFetching: false,
  moreList: []
}, action){
    switch (action.type) {
        case RQESTDATA:
            return Object.assign({}, state, {
                isFetching:true,
                pageNo:action.pageNo
            })
        case GET_MORELIST:
            return Object.assign({}, state, {
                moreList: [...state.moreList, ...action.moreList],
                isFetching:false,
                totalPage: action.totalPage
            })

        default:
            return state
    }
}
