import React from 'react'
import{ActionTypes} from "../Constants/action-types";



const initialState ={
    borrowers: [

    ]


}
    const singleborrowerinitialize ={
        id: '',
        bookname:'',
        studentname:'',
        date:'',
        status:'Returned'
    }
    
export const BorrowerReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_BORROWER:
        return {...state,borrowers:payload};

    default:
        return state;
    
  }
}


    export const SelectedBorrowerReducer=(state=singleborrowerinitialize,{type,payload})=>{
        switch (type) {
            case ActionTypes.SET_SELECTED_BORROWER:
                return {...state,...payload};
        
            default:
                return state;
    }
    }

