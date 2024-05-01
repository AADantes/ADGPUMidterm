import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setStudent,setSelectedStudent } from '../../redux/Actions/StudentAction';
import http from '../../http';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddStudent() {
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const dispatch = useDispatch();
  const students = useSelector((state) => state.allStudents.students);

  const singleStudent = useSelector((state) => state.singleStudent) ;

  const getStudentData=()=>
  {
    http.get(`students`).then((result) => {
      
      console.log(result.data);
      const StudentData = result.data[0];

      dispatch(setStudent(StudentData));

    }).catch(error => {
        console.log(error.message);
    });
  }
  useEffect(() =>
  {
    getStudentData();
  },[]);




  const addstudent=()=> 
  {
   const newstudent={
    firstname:firstname,
    lastname:lastname,

  }



  http.post(`students/add`, newstudent).then((result) => {
    
    toast('Student Added!', {
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
  getStudentData();
 
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

 


    const updatestudent=()=>
    {
      const updatedstudent={
       
        studentID: singleStudent.studentID,
        firstname:firstname,
        lastname:lastname,

      }

      const studentdatabase={
       
        studentID: singleStudent.studentID,
        firstname:firstname,
        lastname:lastname,

      }


      http.put(`students/${singleStudent.studentID}/edit`, studentdatabase).then((result) => {
        toast('Student Updated!', {
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
        getStudentData();

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


      const updatedStudents = students.map(student => {
        if (student.studentID === singleStudent.studentID) {
          return updatedstudent;
        } else {
          return student;
        }
      });

      // const oldStudent = [...students];
      // const studentindex = oldStudent.findIndex((student) => student.id===singleStudent.id);
      // oldStudent.splice(studentindex,1,updatedstudent);
      // dispatch(setStudent(oldStudent));

      singleStudent.firstname='';
      singleStudent.lastname='';
      dispatch (setSelectedStudent(singleStudent));

      setFirstname('');
      setLastname('');
    }

  useEffect(()=>
  {

    if(singleStudent.firstname === ''){

    }
    else
    {
      setFirstname(singleStudent.firstname);
      setLastname(singleStudent.lastname);
    }


  },[singleStudent])
  

return (
  <>
          <div className="textbox-form">
  <input type="text" className='textbox' value ={firstname} placeholder="Enter first name" onChange={(e)=> setFirstname(e.target.value)}/>
  <input type="text" className='textbox' value ={lastname} placeholder="Enter last name" onChange={(e)=> setLastname(e.target.value)}/>

  {
     singleStudent.state === 'UPDATING' ? (
    <button onClick={updatestudent} className="update">Update</button>
  ) : (
    <button onClick={addstudent} className="add">Add</button>
  )
}



</div>
  </>
)
}
