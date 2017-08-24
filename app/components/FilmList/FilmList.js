import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import './FilmList.css';

class FilmList extends React.Component{
    constructor(props){
        super(props);

        this.pageNo = 1;
        this.title = '';
        this.reqData = {};
        this.handleScroll = this.handleScroll.bind(this); //调用和解除的都是同一对象
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll',  this.handleScroll);
    }
    // 滚动事件
    handleScroll(e) {
        let oBody = document.getElementById('app');
        let bodyH = oBody.clientHeight,
            winH = window.screen.height,
            scrollTop =  document.body.scrollTop;

        if( (winH + scrollTop ) >= bodyH){
            this.getList();
        }
    }

    // 获取列表
    getList(){
        let { totalPage, setReqData, loadMore } = this.props;
        this.pageNo ++;

        if(totalPage < this.pageNo){
            return;
        }

        // 获取参数 & 加载更多fn
        let reqData = setReqData(this.pageNo);
        loadMore(reqData);
    }

    render(){
        let {listData } = this.props;
        let list = listData;

        return <ul className="film-ul">
            {
                list.map((item, index)=>{
                    return <li key={index}>

                    <Link to={`/details/${item.id}`}>
                        <div className="avator">
                            <div className="img" style={{backgroundImage:`url(${item.images.large})`}}></div>
                        </div>
                        <div className="title">{item.title}</div>
                        <p className="item-average">
                            <span className="average-txt">评分：<span className="num">{item.rating.average}</span></span>
                        </p>
                    </Link>
                </li>
                })
            }
            </ul>
    }
}

FilmList.defaultProps = {
    totalPage:0,
    listData:[]
}

FilmList.propTypes = {
    totalPage: PropTypes.number.isRequired,
    setReqData: PropTypes.func.isRequired,
    loadMore: PropTypes.func.isRequired,
    listData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        images: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.object.isRequired,
      }).isRequired).isRequired
}

export default FilmList;
