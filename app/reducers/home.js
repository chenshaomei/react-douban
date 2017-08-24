
import { GET_HOTLIST, GET_COMINGSOONLIST, GET_TOPLIST } from '../actions/home'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function home(state = 0, action) {
    let newState;
    switch (action.type) {

        case GET_HOTLIST:
            return Object.assign({}, state, {
                hotList: action.hotList
            })
            break;
        case GET_COMINGSOONLIST:
            return Object.assign({}, state, {
                comingSoonList: action.comingSoonList
            })
            break;
        case GET_TOPLIST:
            return Object.assign({}, state, {
                topList: action.topList
            })
            break;
        default:
            return state
    }
}
