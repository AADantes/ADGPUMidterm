import { ActionTypes } from "../Constants/action-types";

const initialState = {
    students: [

        
    ]
};

const singlestudentInitialize = {
    studentID: '',
    firstname:'',
    lastname:'',
    status: 'Returned'
};
    
export const StudentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_STUDENTS:
            return { ...state, students: payload };

        default:
            return state;
    }
};

export const selectedStudentReducer = (state = singlestudentInitialize, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SELECTED_STUDENT:
            return { ...state, ...payload };

        default:
            return state;
    }
};