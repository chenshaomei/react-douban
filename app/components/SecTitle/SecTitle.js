import React from 'react';
import PropTypes from 'prop-types';

import './SecTitle.css';
class SecTitle extends React.Component {
    render () {
        return <div className="sec-title">
            <span className="til-bor"></span>{this.props.til}
            <a className="sec-more" href={this.props.path}>更多</a>
        </div>
    }
}

SecTitle.propTypes = {
    til: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}
export default SecTitle;
