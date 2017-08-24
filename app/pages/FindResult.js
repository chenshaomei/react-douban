import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../actions/findresult';

import FilmList from '../components/FilmList/FilmList'

import '../css/list.css';

class FindResult extends React.Component{
    constructor(props){
        super(props);

        this.pageNo = 1;
        this.title = '';
        this.reqData = {};
    }

    componentDidMount(){

        let { state , dispatch, location} = this.props;
        // 初始化数据

        let reqData = this.setReqData(this.pageNo);
        dispatch(actions.getMoreList(reqData));

    }

    // 设置请求参数
    setReqData(page){
        let { state , dispatch, location} = this.props;
        let reqData = {};

        reqData.pageNo = page;
        reqData.q = location.query.text;

        return reqData;
    }

    // 加载更多
    loadMore(reqData){
        let {state, dispatch, params } = this.props;

        dispatch(actions.getMoreList(reqData));
    }

    render(){
        let { state } = this.props;
        let list = state.findResultList;
        let isFetching = state.isFetching;

        return <div className="film-list">
            <FilmList totalPage={state.totalPage} listData={list} setReqData={this.setReqData.bind(this)} loadMore={this.loadMore.bind(this)} />

             {isFetching ? (<div className="loading">正在加载中...</div>) : ''}
        </div>
    }
}
function selectState(state) {
    return {
        state: state.findresult
    }
}
FindResult.defaultProps={

}
export default connect(selectState)(FindResult);
