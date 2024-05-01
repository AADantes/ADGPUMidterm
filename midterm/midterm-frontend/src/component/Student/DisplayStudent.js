import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import http from '../../http';
import {setSelectedStudent, setStudent} from '../../redux/Actions/StudentAction';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DisplayStudent() {
  
    const students = useSelector((state) => state.allStudents.students);
    const dispatch = useDispatch();

    const GetStudentId =(id)=>{
      console.log(id);
  
  
      const singlestudent= students.find((student)=>student.studentID===id);
      singlestudent.state="UPDATING";
  
      dispatch (setSelectedStudent(singlestudent))
      console.log(singlestudent);
  
    }

    
    const GetRemoveId = (id) =>
    {
      const singlestudent1= students.find((student)=>student.studentID===id);
      singlestudent1.state="REMOVED";
  
      const oldStudent = [...students];
        const studentindex = oldStudent.findIndex((student) => student.studentID===id);
  
  
        oldStudent.splice(studentindex,1,singlestudent1);
        dispatch(setStudent(oldStudent));
        console.log(students);
  
        http.delete(`students/${singlestudent1.studentID}/delete`).then((result) => {
        
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

  const getStudentData=()=>
  {
    http.get(`students`).then((result) => {
      
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

      const StudentData = result.data[0];

      dispatch(setStudent(StudentData));

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
    getStudentData();
  },[]);


  return (
    
    <table className="student-table">
      <thead>
      <tr>
          <th>StudentID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Actions</th>
        </tr>
      </thead>



<tbody>
{
  students.filter((student)=>student.state!=='REMOVED').map((student) => {
    return(
      <tr key={student.studentID}>
        <td>{student.studentID}</td>
        <td>{student.firstname}</td>
        <td>{student.lastname}</td>

        <td className='options'>

                  <button className='edit' onClick={() => GetStudentId(student.studentID)}>Edit</button>
                  &nbsp;
                  <button className='delete' onClick={() => GetRemoveId(student.studentID)}>Delete</button>
                </td>

    </tr>
    )
})



}
</tbody>
</table>
  )

}
