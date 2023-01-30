
/**import {createStore} from 'redux'

const reducerFn = (state={counter:0}, action)=>{
    //rules
    //should be synchronous function
    //wes hould not mutate the original state it should be a copy of the original state
    if(action.type === 'INC'){
        return{counter: state.counter+1}
    }
    if(action.type === 'DEC'){
        return {counter: state.counter-1}
    }
    if(action.type === 'ADD'){
        return {counter:state.counter + action.payload}
    }
    return state;
}

const store = createStore(reducerFn);

export default store;*/
/**using redux toolkit */

import {configureStore,createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState :{counter: 0},
    reducers:{
        increment(state,action){
                state.counter ++;
        },
        decrement(state,action){
                state.counter --
        },
        addBy(state,action){
                state.counter += action.payload
        }
    }
})
//export actions
export const actions = counterSlice.actions;

//create a store using config store

const store = configureStore({
    reducer: counterSlice.reducer,
})
export default store