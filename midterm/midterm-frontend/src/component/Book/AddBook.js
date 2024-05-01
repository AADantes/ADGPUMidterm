import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { setBooks, setSelectedBook } from '../../redux/Actions/BookAction';
import http from '../../http';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AddBook() {

    const [bookname,setBookname] = useState('');
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();
    const books = useSelector((state) => state.allBooks.books);
    
    const singleBook = useSelector((state) => state.singleBook);

    const getBookData=()=>
    {
      http.get(`books`).then((result) => {
        console.log(result.data);
        dispatch(setBooks(result.data[0]));
  
      }).catch(error => {
          console.log(error.message);
      });
    }

    const addbook=()=> 
    {


     const newbook={
      bookname:bookname,
      description:description,
      state:'available'
    }

    http.post(`books/add`, newbook).then((result) => {
      toast('Book Added!', {
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
      getBookData();
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
    
    useEffect(() => {
      getBookData();
    }, []);



    const updatebook=()=>
    {
      const updatedbook={
        bookID: singleBook.bookID,
        bookname:bookname,
        description:description,
        state:'available'
      }

      const bookdatabase={
         bookID: singleBook.bookID,
        bookname:bookname,
        description:description,
        state:'available'
      }

      http.put(`books/${singleBook.bookID}/edit`, bookdatabase).then((result) => {
        toast('Book Updated!', {
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
        getBookData();
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


      const updatedBooks = books.map(book => {
        if (book.bookID === singleBook.bookID) {
          return updatedbook;
        } else {
          return book;
        }
      });



      // const oldBook = [...books];
      // const bookindex = oldBook.findIndex((book) => book.id===singleBook.id);
      // oldBook.splice(bookindex,1,updatedbook);
      // dispatch(setBooks(oldBook));

      singleBook.bookname='';
      singleBook.description='';
      singleBook.state='available';
      dispatch (setSelectedBook(singleBook));

      setBookname('');
      setDescription('');
    }

      useEffect(()=>
      {
        if(singleBook.bookname === ''){

        }
        else
        {
          setBookname(singleBook.bookname);
          setDescription(singleBook.description);
        }

      },[singleBook])


  return (
    <>
            <div className="textbox-form">
    <input type="text" className='textbox' value ={bookname} placeholder="Enter book name" onChange={(e)=> setBookname(e.target.value)}/>
    <input type="text" className='textbox' value ={description} placeholder="Enter Description" onChange={(e)=> setDescription(e.target.value)}/>

    {
      singleBook.state==='UPDATING' ?
      <button onClick={()=>updatebook()} className="update">Update</button>
      :
      <button onClick={()=>addbook()} className="add">Add</button>
    }
    
 </div>
    </>
  )
}
