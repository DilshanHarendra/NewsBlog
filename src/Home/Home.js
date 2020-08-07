import React, {useEffect} from 'react';
import './Home.css';


import NewsSmall from "./NewsSmall";
import axios from "../axios";
import getDate from "../getDate";
import MainBody from "./MainBody";
import MainCategoryNews from "./MainCategoryNews";
import {connect} from "react-redux";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import NewsBody from "./NewsBody";


function Home(props) {






    let category=props.history.location.pathname.split("/")[1].toString().trim()||"";
    let home="trending";

    if (category!==""){
        home=category;
    }

    function goto(c){
        props.history.push(c)
    }








        return (

            <div className="home" >
                <div className="container">
                    {category === "news" ||
                    <div className="row">
                        {props[home].slice(0, 1).map(ns => (
                                <div className="col-md-6">
                                    <div className="mainNews" key={ns.title}
                                         style={{backgroundImage: `url(${ns.urlToImage})`}} onClick={()=>goto(`news/${home}/${ns.id}`)}>

                                        <div className="data">
                                            <h5>  {ns.title.length < 50 ? ns.title : `${ns.title.substring(0, 50)}...`}</h5>
                                            <p>{getDate(ns.publishedAt)}</p>
                                        </div>

                                    </div>
                                </div>


                        ))}
                        <div className="col-md-6">
                            <div className="secondryNews">

                                {props[home].slice(1, 5).map(ns => (
                                    <div className="sNews" key={ns.title}
                                             style={{backgroundImage: `url(${ns.urlToImage})`}} onClick={()=>goto(`news/${home}/${ns.id}`)}>

                                            <div className="data">
                                                <h5>  {ns.title.length < 30 ? ns.title : `${ns.title.substring(0, 30)}...`}</h5>
                                                <p>{getDate(ns.publishedAt)}</p>
                                            </div>

                                        </div>

                                ))}


                            </div>
                        </div>
                    </div>
                    }

                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        {category!==""?(
                            category==="news"?(
                                <NewsBody/>
                            ):(
                                    <MainCategoryNews category={category}/>
                                )


                        ):(
                            <MainBody  />
                        )}


                        <div className="col-md-4">


                            <div className="alert bg-primary text-white text-uppercase">
                                Trending
                            </div>
                            {props.trending.slice(6,10).map(ns=>(
                            <NewsSmall key={ns.title}  c={"trending"} newsData={ns}/>

                            ))}
                            <br/>
                            <div className="socialSide text-white p-2 pl-4 m-2" style={{backgroundColor:'#4263a9'}}>
                                <i className="fa fa-facebook mr-4"></i> Like On Facebook
                            </div>
                            <div className="socialSide text-white p-2 pl-4 m-2" style={{backgroundColor:'#40aaea'}}>
                               <i className="fa fa-twitter mr-4"></i> Follow On Twitter
                            </div>
                            <div className="socialSide text-white p-2 pl-4 m-2" style={{backgroundColor:'#c12d63'}}>
                                <i className="fa fa-instagram mr-4"></i> Follow On Instagram
                            </div>
                            <br/>
                            {props.general.slice(0,16).map(ns=>(
                                <NewsSmall key={ns.title} c={"general"} newsData={ns}/>

                            ))}



                        </div>
                    </div>
                </div>
                
                <Footer/>
                
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

const mapDispatchToProps=dispatch=>{
    return{
        setBusiness:(news)=>{dispatch({type:'add',nt:'business',news:news })},
        setHealth:(news)=>{dispatch({type:'add',nt:'health',news:news })},
        setEntertainment:(news)=>{dispatch({type:'add',nt:'entertainment',news:news })},
        setSports:(news)=>{dispatch({type:'add',nt:'sports',news:news })},
        setTechnology:(news)=>{dispatch({type:'add',nt:'technology',news:news })},
        setGeneral:(news)=>{dispatch({type:'add',nt:'general',news:news })},
        settrending:(news)=>{dispatch({type:'add',nt:'trending',news:news })},
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);