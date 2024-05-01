import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setBorrower, setSelectedBorrower } from '../redux/Actions/BorrowerAction';
import http from '../http';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddBorrower() {

    const [studentid,setStudentId] = useState('');
    const [bookid, setBookID] = useState('');

    const dispatch = useDispatch();
    const singleborrowers = useSelector((state) => state.singleBorrower);

    const getBorrowerData=()=>
    {
      http.get(`borrowers`).then((result) => {
        
        console.log(result.data);
        dispatch(setBorrower(result.data[0]));
  
      }).catch(error => {
          console.log(error.message);
      });
    }
    useEffect(() =>
    {
        getBorrowerData();
    },[]);
  


    const addborrower=()=> 
    {
     const newborrower={
        bookID:bookid,
        studentID:studentid
    }

    http.post(`borrowers/add`, newborrower)
    .then((response) => {
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
      getBorrowerData();
    })
    .catch((error) => {
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
};

          return (
            <div>
              <div className="textbox-form">
                <input
                  type="text"
                  className='textbox'
                  value={bookid}
                  placeholder="Enter book number/ID"
                  onChange={(e) => setBookID(e.target.value)}
                />
                <input
                  type="text"
                  className='textbox'
                  value={studentid}
                  placeholder="Enter student number/ID"
                  onChange={(e) => setStudentId(e.target.value)}
                />
                <button className="add" onClick={addborrower}>Add Borrower</button>
              </div>
            </div>
          );
}

