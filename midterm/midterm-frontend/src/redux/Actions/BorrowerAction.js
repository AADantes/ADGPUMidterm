import { ActionTypes } from "../Constants/action-types";

export const setBorrower = (borrowers) => {
    return{
        
        type: ActionTypes.SET_BORROWER,
        payload: borrowers,

};
}

export const setSelectedBorrower = (borrower) => {
    return{
        
        type: ActionTypes.SET_SELECTED_BORROWER,
        payload: borrower,

};
}
