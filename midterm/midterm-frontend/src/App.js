
import './App.css';
import BookPage from './component/Book/BookPage';
import BorrowedList from './component/BorrowedList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentPage from './component/Student/StudentPage';

function App() {
  return (
    <>
     <BrowserRouter basename = "/">
       <Routes>
         <Route path="/" element = {<BorrowedList/>} />
         <Route path="/book" element = {<BookPage/>} />
         <Route path="/student" element = {<StudentPage/>} />
       </Routes>
 
     </BrowserRouter>
     
     
    </>
   );
 }

export default App;
