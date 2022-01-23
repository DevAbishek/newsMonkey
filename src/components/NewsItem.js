import React, { Component } from 'react';
import defaultNewsImg from "../defaultNewsImg.jpg";

export class NewsItem extends Component {
    render() {

        let {title, description, imageUrl, newsUrl, author, date, source} = this.props

        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: "90%", zIndex: "1"}}>{source}</span>
                    <img src={imageUrl ? imageUrl : defaultNewsImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author ? author : "Tyler Durden"} on {new Date(date).toDateString()}</small></p>
                            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
