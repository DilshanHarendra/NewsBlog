import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NewsSmall from "./NewsSmall";
import {connect} from "react-redux";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area section-padding-80-0  text-white">
                    <div className="container">
                        <br/>
                        <div className="row">


                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-footer-widget mb-80">

                                    <h4 className="widget-title">Contact US</h4>
                                    <nav>
                                        <ul className="catagories-nav">
                                            <i className="fa fa-phone contact"></i>
                                                &nbsp;&nbsp;+94112 123 456 <br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+94112 123 456<br/><br/>
                                            <i className="fa fa-envelope contact"></i>
                                                &nbsp;&nbsp;info@my.news.com<br/><br/>
                                            <i className="fa fa-map-marker contact"></i>
                                                &nbsp;&nbsp;&nbsp;&nbsp;No 555/50<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;Road 55<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;Town,<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;State,<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;Country
                                        </ul>
                                    </nav>


                                </div>
                            </div>


                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-footer-widget mb-80">

                                    <h4 className="widget-title">Categories</h4>


                                    <nav>
                                        <ul className="catagories-nav ">
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
                                    </nav>
                                </div>
                            </div>





                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-footer-widget mb-80">

                                    <h4 className="widget-title">Follow Us</h4>

                                    <div className="footer-social-info">
                                        <Link to="/" className="facebook p-3 text-white" data-toggle="tooltip" data-placement="top"
                                              title="Facebook"><i className="fa fa-facebook"></i></Link>
                                        <Link to="/" className="twitter p-3 text-white" data-toggle="tooltip" data-placement="top"
                                              title="Twitter"><i className="fa fa-twitter "></i></Link>
                                        <Link to="/" className="pinterest p-3 text-white" data-toggle="tooltip" data-placement="top"
                                              title="Pinterest"><i className="fa fa-pinterest"></i></Link>
                                        <Link to="/" className="instagram p-3 text-white" data-toggle="tooltip" data-placement="top"
                                              title="Instagram"><i className="fa fa-instagram"></i></Link>
                                        <Link to="/" className="youtube p-3 text-white" data-toggle="tooltip" data-placement="top"
                                              title="YouTube"><i className="fa fa-youtube-play"></i></Link>
                                    </div>
                                    <br/>
                                    <div className="d-flex justify-content-around">
                                        <img src="/Images/app-store.png" alt="app-store.png"/>
                                        <img src="/Images/google-play.png" alt="google-play.png"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <h5 className="text-center">Powered By <Link to="https://newsapi.org">News Api</Link></h5>
                    <br/><br/>
                </footer>
            </div>
        );
    }
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
export default connect(mapStateToProps)(Footer);