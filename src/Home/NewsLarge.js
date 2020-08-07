import React from 'react';
import "./NewsLarge.css";
import getDate from "../getDate";
import {Link} from "react-router-dom";

function NewsLarge({c,newsData}) {


        return (
            <div className="NewsLarge p-3"><Link to={`news/${c}/${newsData.id}`}>
                <div className="">
                    <img className="img" src={newsData.urlToImage||"http://www.servicesforseniors.ca/wp-content/themes/mts_reader/images/nothumb-reader-featured.png"} alt={newsData.title}/>
                    <div className="sidebarNewsText">
                        <h4 className="ml-2 mb-2 text-justify">
                            {newsData.title.length<50?newsData.title: `${newsData.title.substring(0,50)}...`}
                        </h4>

                        <p className="ml-2 mb-2 text-secondary">{getDate(newsData.publishedAt)}</p>
                    </div>

                </div>
            </Link>
            </div>
        );

}

export default NewsLarge;