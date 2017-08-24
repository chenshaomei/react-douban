import React from 'react';
import ReactDom from 'react-dom';

import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav';
import Home from './Home';


export default class Index extends React.Component{
    render(){
        return <div>
            <Header />
            <div className="content">{this.props.children || <Home />}</div>
        </div>
    }
}
