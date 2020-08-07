import React, {useEffect} from "react";
import CategoryNewsBox from "./CategoryNewsBox";
import {connect} from "react-redux";


import Pagination from '@material-ui/lab/Pagination';

function MainCategoryNews(props) {
    const [page, setPage] = React.useState(1);
    const [start, setStrat] = React.useState(0);
    const [end, setEnd] = React.useState(0);
    let category=props.category;

    let per=21;
    let s=5;
    useEffect(()=>{

       setStrat(s);
       setEnd(s+per);

    },[])



    const handleChange = (event, value) => {
        setStrat(value+s);
        setEnd((value+s)+per);
        setPage(value);

    };


    return <div className="col-md-8">
        <div className="text-uppercase alert bg-primary text-white">
            {category}
        </div>
        <div className="row">
            {props[category].slice(start,end).map(ns=>(
                <CategoryNewsBox key={ns.title} c={category} newsData={ns}/>
            ))}
        </div>
        <br/><br/>
        <Pagination className="mt-2 mx-auto" count={Math.ceil(props[category].length/per)} page={page} onChange={handleChange} />
    </div>
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

export default connect(mapStateToProps)(MainCategoryNews);