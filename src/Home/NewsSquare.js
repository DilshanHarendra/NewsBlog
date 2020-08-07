import React from 'react';
import './NewsSquare.css';
import getDate from "../getDate";
import {Link} from "react-router-dom";


function NewsSquare({c,newsData}) {



    return (
        <div className="NewsSquare p-3 mx-auto">
            <Link to={`news/${c}/${newsData.id}`}>
            <div className="">
                <img className="img" src={newsData.urlToImage||"http://www.servicesforseniors.ca/wp-content/themes/mts_reader/images/nothumb-reader-featured.png"} alt={newsData.title}/>
                <div className="sidebarNewsText">
                    <p className="ml-2 mb-2 text-justify title">
                        {newsData.title.length<20?newsData.title: `${newsData.title.substring(0,20)}...`}
                    </p>

                    <p className="ml-2 mb-2 text-secondary">{getDate(newsData.publishedAt)}</p>
                </div>

            </div>
            </Link>
        </div>
    );

}

export default NewsSquare;