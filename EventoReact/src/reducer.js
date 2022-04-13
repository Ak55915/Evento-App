//import { createStore,initialState } from "redux";

import { initialState } from "./Store";
const reducer = (state=initialState, action) => {

    switch(action.type){
        case 'LOGGEDIN' :
            return {...state, loggedin: true};

        case 'LOGGEDOUT' :
            return {...state, loggedin: false};

          default :
          return {...state}

    }
}
    export default reducer;