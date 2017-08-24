import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import actions from '../actions/details';
import '../css/details.css';

class Details extends React.Component {

    // 初始化数据
    componentDidMount(){
        let { state , dispatch, params} = this.props;

        dispatch(actions.getDetails(params.id));
    }

    // 过滤去掉英文名
    filterName(name){
        return name.replace(/[a-zA-Z]/g,'')
    }

    render(){

        let { state } = this.props;
        let details = state.detailsData;
        let isFetching = state.isFetching;

        const Content = (details)=>{
            let start = details.image.lastIndexOf('/')+1;
            let end = details.image.lastIndexOf('.');
            let imgId = details.image.substring(start,end);

            return <div>
                <div className="details-hd" style={{backgroundImage:`url(http://img7.doubanio.com/view/movie_poster_cover/lpst/public/${imgId}.jpg)`}}>
                    <div className="details-hd-bg"></div>
                    <div className="bd-inn">
                        <div className="film-imgs"><img src={`http://img7.doubanio.com/view/movie_poster_cover/lpst/public/${imgId}.jpg`} alt="" /></div>
                        <div className="film-info">
                            <h6 className="name">{details.title}</h6>
                            <p className="average">{details.rating.average}</p>
                            <p className="count">{details.ratings_count}人评价</p>
                        </div>
                    </div>
                </div>
                <div className="details-bd">
                    <div className="info-part1">
                        <p>{details.attrs.movie_duration} {details.attrs.movie_type.join(' / ')}</p>
                        <p>{details.attrs.pubdate.join(' 、 ')}上映 {details.attrs.country}</p>
                        <p>
                        {
                            details.attrs.director && details.attrs.director.map((item,i)=>{
                                return this.filterName(item)+'(导演)'
                            }).join(' / ')
                        }
                        </p>
                        <p>
                        {
                            details.attrs.cast && details.attrs.cast.map((item,i)=>{
                                return this.filterName(item)
                            }).join(' / ')
                        }
                        </p>
                    </div>
                    <div className="info-part2">
                        <p className="til">{details.title}的剧情简介</p>
                        <p>{details.summary}</p>
                    </div>
                </div>
            </div>
        }

    return <div className="details">

        {
            !isFetching
            ? Content(details)
            : <div className="loading">正在加载中...</div>
        }
    </div>

    }
}

function selectState(state) {
    return {
        state: state.details
    }
}

export default connect(selectState)(Details);
