import React, {useEffect, useState} from "react";
import axios from "../axios";

import "./SearchResults.css";
import Pagination from "@material-ui/lab/Pagination";
import getDate from "../getDate";
import Footer from "../Footer";

const hashMap = require('hashmap');
function SearchResult(props) {

    const [news,setNews]=useState([]);
    var key= props.history.location.pathname.split("/")[2]
    const [page, setPage] = React.useState(1);
    const [start, setStrat] = React.useState(0);
    const [end, setEnd] = React.useState(0);
    let category=props.category;
    var map= new hashMap();
    let per=16;
    let s=0;
    useEffect(()=>{


        setEnd(per);

    },[])



    const handleChange = (event, value) => {
        setStrat(value);
        setEnd(value+per);
        setPage(value);

    };
    useEffect(()=>{
       getData();
    },[key]);

    async function  getData() {
        var data=await axios({
                url:"everything",
                methode: 'GET',
                params:{q:key, apiKey:process.env.REACT_APP_API_KEY,pageSize:100}
            }

        )

        data.data.articles.forEach(n=>{
                map.set(n.title.toString().trim(),n)

        })
        setNews(map.values())
    }
    return<>
    <div className="container mt-2 searchResult">
        <div className="text-uppercase alert bg-primary text-white d-flex">
            Search Results {key}
            <div className="ml-auto" >{news.length} results found</div>
        </div>
            <div className="row">
                {news.slice(start,end).map(ns=>(
                    <div className="col-md-3">
                        <div className="NewsSquare p-3 mx-auto">
                            <div className="">
                                <img className="img" src={ns.urlToImage||"https://www.iconsdb.com/icons/preview/black/square-xxl.png"} alt={ns.title}/>
                                <div className="sidebarNewsText">
                                    <p className="ml-2 mb-2 text-justify title">
                                        {ns.title.length<20?ns.title: `${ns.title.substring(0,20)}...`}
                                    </p>

                                    <p className="ml-2 mb-2 text-secondary">{getDate(ns.publishedAt)}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                ))}
            </div>
        <br/><br/>
        <Pagination className="mt-2 mx-auto mb-5" count={Math.ceil(news.length/per)} page={page} onChange={handleChange} />


    </div>
        <Footer/>
        </>
        ;
}export default SearchResult;