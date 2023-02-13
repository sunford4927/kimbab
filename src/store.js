import {createStore} from 'redux'
import {createAction, createReducer} from '@reduxjs/toolkit'

const addToDo = createAction('ADD')

const deleteToDo = createAction('DELETE')

const choiceToDo = createAction('CHOICE')



const reducer = createReducer({visit :'',choice:[], all_price : 0},{
    [addToDo]: (state,action) => {
        let base = action.payload.split(' ');
        state.choice.push({name: base[0], price: Number(base[1]), id: Date.now()})
        state.all_price += Number(base[1])

    },
    [deleteToDo]: (state,action) => {
        let base = action.payload.split(' ');
        for(let i = state.choice.length -1; i > -1 ; i--){
            if(state.choice[i].name === base[0]){
                state.choice.splice(i,1)
                break
            }
        }
        state.all_price -= Number(base[1])


    },
    [choiceToDo]: (state,action) => {state.visit = action.payload}


}
)

const store = createStore(reducer)

export const actionCreators = {
    addToDo,
    deleteToDo,
    choiceToDo,

}
export default store