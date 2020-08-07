
import React from "react";

import NewsLarge from "./NewsLarge";
import NewsSmall from "./NewsSmall";
import NewsSquare from "./NewsSquare";

import {connect} from "react-redux";

function MainBody(props) {




    return <div className="col-md-8">


        <div className="text-uppercase alert bg-primary text-white">
            Health
        </div>
        <div className="newsBody">
            {props.health.slice(0,2).map(ns=>(
                <NewsLarge key={ns.title} c={"health"} newsData={ns}/>
            ))}
            {props.health.slice(2,4).map(ns=>(
                <NewsSmall key={ns.title} c={"health"} newsData={ns}/>
            ))}
        </div>




        <div className="text-uppercase alert bg-primary text-white">
            Business
        </div>
        <div className="newsBody">
            {props.business.slice(0,4).map(ns=>(
                <NewsSmall key={ns.title} c={"business"} newsData={ns}/>
            ))}
        </div>




        <div className="text-uppercase alert bg-primary text-white">
            Sports
        </div>
        <div className="newsBody">

            {props.sports.slice(0,1).map(ns=>(
                <NewsLarge c={"sports"} key={ns.title} newsData={ns}/>
            ))}

            <div>
                {props.sports.slice(1,5).map(ns=>(
                    <NewsSmall key={ns.title} c={"sports"} newsData={ns}/>
                ))}
            </div>
        </div>


        <div className="text-uppercase alert bg-primary text-white">
            entertainment
        </div>
        <div className="newsBodyGrid">
            {props.entertainment.slice(0,6).map(ns=>(
                <NewsSquare className="m-2" key={ns.title} c={"entertainment"} newsData={ns}/>
            ))}
        </div>



        <div className="text-uppercase alert bg-primary text-white">
            technology
        </div>
        <div className="newsBody">
            {props.technology.slice(0,4).map(ns=>(
                <NewsLarge key={ns.title}  c={"technology"} newsData={ns}/>
            ))}
        </div>


    </div>
}
const mapStateToProps=state=>{
    return{
        business: state.business,
        health:state.health,
        entertainment:state.entertainment,
        sports:state.sports,
        technology:state.technology,
        general:state.general
    }
}
export default connect(mapStateToProps)(MainBody);