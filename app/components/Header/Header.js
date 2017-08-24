import React from 'react';

import './Header.css';

class Header extends React.Component {
    render(){
        return <header className="header flex">
            <div className="header-left back">
                <a href="javascript:history.go(-1);"><img src={require('../../images/back1.png')} /></a>
            </div>

            <div className="header-left logo">
                <a href="/"><img src={require('../../images/douban-logo1.png')} /></a>
            </div>
        </header>
    }
}
export default Header;
