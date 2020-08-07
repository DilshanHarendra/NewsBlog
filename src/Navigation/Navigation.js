import React, {Component, useEffect, useState} from 'react';
import './Navigation.css';

import {Link} from "react-router-dom";
import getDate from "../getDate";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import {connect} from "react-redux";
function Navigation(props) {
    const history = useHistory();

    useEffect(()=>{

        getTrendingNews();
        getGeneralNews("business");
        getGeneralNews("health");
        getGeneralNews("entertainment");
        getGeneralNews("sports");
        getGeneralNews("technology");
        getGeneralNews("general");




    },[]);


    async  function getTrendingNews() {
        var data=await axios({
                url:"top-headlines",
                methode: 'GET',
                params:{sources:"bbc-news", apiKey:process.env.REACT_APP_API_KEY}
            }

        )
        props.settrending(data.data.articles);
    }

    async  function getGeneralNews(type) {
        var data=await axios({
                url:"top-headlines",
                methode: 'GET',
                params:{category:type, apiKey:process.env.REACT_APP_API_KEY,pageSize:100}
            }

        )


        switch (type) {
            case "health": {
                props.setHealth(data.data.articles);
                break;
            }
            case "entertainment": {
                props.setEntertainment(data.data.articles);
                break;
            }
            case "sports": {
                props.setSports(data.data.articles);
                break;
            }
            case "technology": {
                props.setTechnology(data.data.articles);
                break;
            }
            case "business": {
                props.setBusiness(data.data.articles);
                break;
            }
            case "general":{
                props.setGeneral(data.data.articles);

                break;
            }

            default:{
                break
            }

        }
    }



  const [key,setKey]= useState("");

    const changeHandler=e=>{
        setKey(e.target.value);
    }

    const search=(e)=>{
        e.preventDefault();
        history.push(`/search/${key}`)
    }


        return (
            <div className="navigation">
                <div className="container-fluid bg-primary">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="d-flex mx-auto links justify-content-between text-white pt-1">
                                <p>{getDate(new Date())}</p>
                                <Link to="/">Start Here</Link>
                                <Link to="/">Forums</Link>
                                <Link to="/">Contact</Link>
                                <Link to="/">Buy Now</Link>
                            </div>

                        </div>
                        <div className="col-md-3 pb-2 social">
                            <a href="/" ><i className="fa fa-facebook"></i></a>
                            <a href="/" ><i className="fa fa-twitter"></i></a>
                            <a href="/" ><i className="fa fa-linkedin"></i></a>
                            <a href="/" ><i className="fa fa-youtube"></i> </a>
                            <a href="/" ><i className="fa fa-instagram"></i></a>
                            <a href="/" ><i className="fa fa-pinterest"></i></a>
                            <a href="/"><i  className="fa fa-skype"></i></a>
                        </div>
                    </div>
                </div>
                <img className="p-3 ml-5 logo" src="/Images/logo.png" alt="logo"/>


                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                    <Link className="navbar-brand" to="/">abc NEWS</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/trending">Trending</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>





                        </ul>

                            <form className="form-inline my-2 my-lg-0" onSubmit={search}>
                                <div className="d-flex">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search..."
                                       aria-label="Search" onChange={changeHandler} value={key}/>
                                <button className="btn btn-outline-primary pl-2 pr-2 pt-1 pb-1 fa fa-search"  type="submit"></button>
                                </div>
                            </form>


                    </div>
                </nav>
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

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);