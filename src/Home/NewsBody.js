import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import "./MainBody.css";
import {connect} from "react-redux";
function NewsBody(props) {



    /*
*
* author: "BBC News"
content: "Media captionPeople in Beirut help clear the streets after deadly explosion
↵People in Beirut have expressed anger at the government over what they say was negligence that led to Tuesday's huge explo… [+5858 chars]"
description: "People in Lebanon call for justice after a blast that left at least 135 dead and over 4,000 injured."
publishedAt: "2020-08-06T04:56:34Z"
source: {id: "bbc-news", name: "BBC News"}
title: "Angry Beirut residents demand answers after blast"
url: "http://www.bbc.co.uk/news/world-middle-east-53673957"
urlToImage: "https://ichef.bbci.co.uk/images/ic/1024x576/p08mwl7w.jpg"

*
* */
    var path=window.location.pathname.split("/");
   let category=path[2].toString().trim();
   let id= parseInt(path[3].toString().trim());

    useEffect(()=>{
        topFunction();
    },[category,id])

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }





        return (
            <div className="col-md-8 MainBody mb-5">
                <Link to={`/${category}`} className="text-left text-primary">Go back</Link><hr/>

                {props[category].filter(n=>(n.id===id)).map(n=>(
                    <div key={n.id}>
                        <h1 className="text-center mb-3">{n.title}</h1>
                        <img className="img mb-5" src={n.urlToImage||"http://www.servicesforseniors.ca/wp-content/themes/mts_reader/images/nothumb-reader-featured.png"} alt="img"/>
                        <div className="text-justify" dangerouslySetInnerHTML={{__html:n.content}}></div>

                        <br/>
                        <a href={n.url} className="text-primary">Read More...</a>
                    </div>
                ))}

            </div>
        );

}
const mapStateToProps=state=>{
    return{
        business: state.business,
        health:state.health,
        entertainment:state.entertainment,
        sports:state.sports,
        technology:state.technology,
        general:state.general,
        trending:state.trending
    }
}
export default connect(mapStateToProps)(NewsBody);