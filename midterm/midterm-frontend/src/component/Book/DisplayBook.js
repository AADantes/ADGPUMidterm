import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import http from '../../http';
import { setSelectedBook, setBooks } from '../../redux/Actions/BookAction';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function DisplayBook() {

    const books = useSelector((state) => state.allBooks.books);
    const dispatch = useDispatch();

    const GetBookId =(id)=>{
      console.log(id);
  
  
      const singlebook= books.find((book)=>book.bookID===id);
        singlebook.state="UPDATING";
  
      dispatch (setSelectedBook(singlebook))
      console.log(singlebook);
  
    }

    
  const GetRemoveId = (id) =>
  {
    const singlebook1= books.find((book)=>book.bookID===id);
    singlebook1.state="REMOVED";


    const oldBook = [...books];
      const bookindex = oldBook.findIndex((book) => book.bookID===id);
     
      oldBook.splice(bookindex,1,singlebook1);
      dispatch(setBooks(oldBook));
      console.log(books);

      http.delete(`books/${singlebook1.bookID}/delete`).then((result) => {
      
        toast('Deleted Student from Table!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }).catch(error => {
        toast('An error has occured. (' + error.message +')', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      });

  }

  const getBookData=()=>
  {
    http.get(`books`).then((result) => {
      
      toast('Table Loaded!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      const BookData = result.data[0];

      dispatch(setBooks(BookData));

    }).catch(error => {
      toast('An error has occured. (' + error.message +')', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    });
  }
  useEffect(() =>
  {
    getBookData();
  },[]);


  return (
    
    <table className="book-table">
      <thead>
      <tr>
          <th>BookID</th>
          <th>BookName</th>
          <th>Description</th>
          <th>State</th>
          <th>Actions</th>

        </tr>
      </thead>



<tbody>
{
  books.filter((book)=>book.state!=='REMOVED').map((book) => {
    return(
      <tr key={book.bookID}>
        <td>{book.bookID}</td>
        <td>{book.bookname}</td>
        <td>{book.description}</td>
        <td>{book.state}</td>

        <td className='options'>

                  <button className='edit' onClick={() => GetBookId(book.bookID)} >Edit</button>
                  &nbsp;
                  <button className='delete' onClick={() => GetRemoveId(book.bookID)} >Delete</button>
                </td>

    </tr>
    )
})
 

}
</tbody>
</table>
  )
}