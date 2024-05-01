    import {combineReducers} from 'redux';
    import { BorrowerReducers, SelectedBorrowerReducer } from './BorrowerReducer';
    import { bookReducer, selectedBookReducer } from './BookReducer';
    import { StudentReducer,selectedStudentReducer } from './StudentReducer';

    const reducers = combineReducers({

        allBorrowers:BorrowerReducers,
        singleBorrower:SelectedBorrowerReducer,


        allBooks:bookReducer,
        singleBook:selectedBookReducer,

        allStudents:StudentReducer,
        singleStudent:selectedStudentReducer,



    })

    export default reducers;