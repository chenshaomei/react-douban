import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import './SwiperList.css';


class SwiperList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posX: 0
        }

        this.startX = 0;                       //开始位置
        this.moveX = 0;                        //滑动距离
        this.winW = window.screen.width;       // 屏幕宽
        this.liW = 100;              //li宽


    }
    // start
    handleStart(e){
        this.startX = e.touches[0].pageX;
    }
    // move
    handleMove(e){
        e.preventDefault();
        this.moveX = e.touches[0].pageX - this.startX;
    }
    // end
    handleEnd(){
        let ulW = this.liW * this.props.showingList.length,
            maxDisX = ulW-this.winW,
            disX = (this.moveX / this.winW)* maxDisX,
            posX =  this.state.posX + disX;

        // 终点判断
        if(posX<= -maxDisX){
            posX = -maxDisX;
        }
        if(posX>=0){
            posX = 0;
        }

        this.setState({
            posX: posX
        })
        this.moveX = 0;
    }

    render(){
        let list = this.props.showingList, // 列表数据 list
            ulW = this.liW*list.length;    // ul宽

        return <div
            className="swiper_wrap"
            onTouchStart={this.handleStart.bind(this)}
            onTouchMove={this.handleMove.bind(this)}
            onTouchEnd={this.handleEnd.bind(this)}>

            <ul ref="swiperUl" style={{width:`${ulW}px`, transform:`translate3d(${this.state.posX}px,0,0)`}}>
                {
                    list.map((item,index)=>{
                        return <li key={item.id}><Link to={`/details/${item.id}`}>
                            <div className="item-avator" style={{backgroundImage:`url(${ item.images.large })`}}></div>
                            <h6 className="item-title">{item.title}</h6>
                            <p className="item-average"><span className="average-txt">评分：<span className="num">{item.rating.average}</span></span></p>
                        </Link></li>
                    })
                }
            </ul>
        </div>
    }
}
SwiperList.defaultProps={
    showingList:[]
}

SwiperList.propTypes = {
    showingList: PropTypes.array.isRequired
}
export default SwiperList;
