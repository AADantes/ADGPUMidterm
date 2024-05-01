import { ActionTypes } from "../Constants/action-types";

const initialState = {
    books: [

        
    ]
};

const singleBookInitialize = {
    bookID: '',
    bookname: '',
    description: '',
    status: 'available'
};
    
export const bookReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BOOKS:
            return { ...state, books: payload };

        default:
            return state;
    }
};

export const selectedBookReducer = (state = singleBookInitialize, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SELECTED_BOOK:
            return { ...state, ...payload };

        default:
            return state;
    }
};