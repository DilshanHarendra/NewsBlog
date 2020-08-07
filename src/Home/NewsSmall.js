import React from 'react';
import './NewsSmall.css';
import getDate from "../getDate";
import {Link} from "react-router-dom";
function NewsSmall({c,newsData}){





        return (
            <div><Link to={`news/${c}/${newsData.id}`}>
                <div className="NewsSmall mt-2 pb-2 ml-2 mr-2 mb-2">
                    <div className=" d-flex">
                        <img src={newsData.urlToImage||"http://www.servicesforseniors.ca/wp-content/themes/mts_reader/images/nothumb-reader-featured.png"} alt={newsData.title}/>
                        <div className="sidebarNewsText">
                            <p className="ml-2 mb-2 text-justify">
                                {newsData.title.length<40?newsData.title: `${newsData.title.substring(0,40)}...`}
                            </p>

                            <p className="ml-2 mb-2 text-secondary">{getDate(newsData.publishedAt)}</p>
                        </div>
                    </div>

                </div>
            </Link>
            </div>
        );

}

export default NewsSmall;