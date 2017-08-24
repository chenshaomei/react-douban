import React from 'react';
import ReactDom from 'react-dom';

import Nav from './components/Nav/Nav';

export default class App extends React.Component {
    render() {
      return <div>
        {this.props.children}
      </div>
    }
}
