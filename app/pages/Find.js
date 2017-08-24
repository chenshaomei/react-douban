import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import Nav from '../components/Nav/Nav';

import '../css/find.css';

class Find extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchKeyword:''
        }

    }
    componentDidMount(){
        this.refs.seachIpt.focus();
    }
    handleChange(e){
        this.setState({
            searchKeyword:e.target.value
        })
    }
    // 点击
    handleClick(){
        if(!this.refs.seachIpt.value){
            alert('搜索内容不能为空');
            this.refs.seachIpt.focus();
            return;
        }
        location.href = `/findresult?text=${this.refs.seachIpt.value}`;

    }
    render(){
        return <div className="search">
            <div className="page-body">
                <p className="til">请输入查询内容</p>
                <div className="search-input"><input value={this.state.searchKeyword} ref="seachIpt" onChange={this.handleChange.bind(this)} type="text" /></div>
                <div className="search-btn"><button onClick={this.handleClick.bind(this)}>搜索</button></div>
            </div>

            <Nav />
        </div>
    }
}

export default Find;
