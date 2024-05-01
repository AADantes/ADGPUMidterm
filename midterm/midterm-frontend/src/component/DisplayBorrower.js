import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setBorrower,setSelectedBorrower } from '../redux/Actions/BorrowerAction';
import http from '../http';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DisplayBorrower() {

  
  const borrowers = useSelector((state) => state.allBorrowers.borrowers);
  const dispatch = useDispatch();

  const GetBorrowerId =(id)=>{
    console.log(id);

  
    const singleborrower= borrowers.find((borrowers)=>borrowers.id===id);
    singleborrower.state="UPDATING";

  dispatch (setSelectedBorrower(singleborrower))
  console.log(singleborrower);

}
  
  
    const getBorrowerData=()=>
  {
    http.get(`borrowers`).then((result) => {
      
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
      dispatch(setBorrower(result.data[0]));

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
      getBorrowerData();
  },[]);



  const handleReturn = (id) => {
    const updatedBorrowers = borrowers.map(borrower => {
      if (borrower.id === id) {
        return { ...borrower, status: 'returned' };
      }
      return borrower;
    });

    http.put(`borrowers/${id}/edit`, { status: 'returned' })
      .then((response) => {
        toast('Record Updated!', {
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
        dispatch(setBorrower(updatedBorrowers));
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
        <table className='BorrowerTable'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Book Name</th>
                    <th>Student Name</th>
                    <th>Date Borrowed</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>


            {/* ------------------------------------------------------------------------------------- */}

            
            <tbody>
              {

                  borrowers.map((borrower) => {
                   return(
                   <tr key={borrower.id}>
                   <td>{borrower.id}</td>
                   <td>{borrower.bookname}</td>
                   <td>{borrower.studentname}</td>
                  <td>{borrower.date}</td>
                  <td>{borrower.status}</td>

                  <td className='options'><button onClick={() => handleReturn(borrower.id) } disabled={borrower.status === 'returned'} >Return</button></td>

                  </tr>
                  )
})
              }


            </tbody>

        </table>
    </div>
  )
}
