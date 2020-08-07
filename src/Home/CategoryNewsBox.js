import React from 'react';
import "./CategoryNewsBox.css";
import getDate from "../getDate";
import {Link} from "react-router-dom";

function CategoryNewsBox({c,newsData}) {


    return (
        <div className="CategoryNewsBox col-md-4">

            <div className="">
                <Link to={`news/${c}/${newsData.id}`}>
                <img className="img" src={newsData.urlToImage||"https://www.iconsdb.com/icons/preview/black/square-xxl.png"} alt={newsData.title}/>
                <div className="sidebarNewsText">
                    <h4 className="ml-2 mb-2 text-justify text-dark">
                        {newsData.title.length<50?newsData.title: `${newsData.title.substring(0,50)}...`}
                    </h4>

                    <p className="ml-2 mb-2 text-secondary">{getDate(newsData.publishedAt)}</p>
                </div>
                </Link>
            </div>

        </div>
    );

}

export default CategoryNewsBox;