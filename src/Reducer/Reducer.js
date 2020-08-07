const hashMap = require('hashmap');

const intialize={
    business: [],
    health:[],
    entertainment:[],
    sports:[],
    technology:[],
    general:[],
    trending:[]
}

const reducer=(state=intialize,action)=>{

    if (action.type==="add") {
        var map = new hashMap();
        var c=1;

        action.news.forEach(ns => {
            ns['id']=c;
            map.set(ns.title, ns);
            c++;
        });
        switch (action.nt) {
            case 'business': {
                return {...state,business:map.values()}
            }
            case 'health': {
                return {...state,health:map.values()}

            }
            case 'entertainment': {
                return {...state,entertainment:map.values()}

            }
            case 'sports': {
                return {...state,sports:map.values()}

            }
            case 'technology': {
              return {...state,technology:map.values()}

            }
            case 'general': {
               return {...state,general:map.values()}

            }
            case 'trending': {
              return {...state,trending:map.values()}

            }
            default:{
                return state

            }
        }
    } else{
        return state;
    }


}

export default reducer;