import React from 'react';
import defaultNewsImg from "../defaultNewsImg.jpg";

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {

    return (
        <div className='my-3'>
            <div className="card">
                <div>
                    <span className="badge rounded-pill bg-dark" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>{source}</span>
                </div>
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

export default NewsItem;
