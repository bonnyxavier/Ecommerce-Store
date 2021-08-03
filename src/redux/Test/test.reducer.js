import testTypes from "./test.constants";

const INITIAL_STATE = 0;

const incrementReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case testTypes.INCREMENT_BUTTON:
            if(state<20){
                return state+3
            }
            else{
                return state-10
            }
        default: 
            return state;
    }
}

export default incrementReducer
