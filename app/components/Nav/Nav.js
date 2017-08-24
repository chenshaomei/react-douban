import React from 'react';
import { Link } from 'react-router';

import './Nav.css';
export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navList: [
                {
                    path:'/home',
                    icon:require('../../images/icons/home.png'),
                    txt:'首页'
                },
                {
                    path:'/find',
                    icon:require('../../images/icons/search.png'),
                    txt:'发现'
                },
                {
                    path:'/my',
                    icon:require('../../images/icons/my.png'),
                    txt:'我的'
                }
            ]
        }
    }

    render(){
        let activeIndex = 0;
        if(location.pathname !='/'){
            activeIndex = -1;
        }
        // nav data
        let navList = this.state.navList;

        return <div className="nav">

            <ul className="nav-ul">
            {
                navList.map((item,index)=>{

                    return  <li key={index}  ><Link to={item.path} className={index==activeIndex?'active':''} activeClassName="active"><i></i><span className="txt">{item.txt}</span></Link></li>
                })
            }
            </ul>
        </div>
    }
}
