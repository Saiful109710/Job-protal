import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'
import axios from 'axios'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const MyApplication = () => {

    const {user,loading,setLoading} = useAuth()
    
    const [jobs,setJobs] = useState([])
    const axiosSecure = useAxiosSecure()
    

    useEffect(()=>{
        
        // fetch(`http://localhost:7000/job-application?email=${user.email}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setJobs(data)
            
        // })

      //  axios.get(`http://localhost:7000/job-application?email=${user.email}`,{
      //   withCredentials:true
      //  })
      //  .then(res=>setJobs(res.data))

      axiosSecure.get(`/job-application?email=${user.email}`)
      .then(res=>setJobs(res.data))

    },[user.email])


    const handleDelete = (id)=>{
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:7000/job-applications/${id}`,{
                method:"DELETE"
    
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
              if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
              }

              const remaining = jobs.filter(job=>job._id !==id)
              setJobs(remaining)
            })
            }
          });


    }
   

  return (
    <div>
        <h2>My Application : {jobs.length}</h2>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        jobs.map(job=>(
            <tr key={job._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.title}</div>
                  <div className="text-sm opacity-50">{job.location}</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button onClick={()=>handleDelete(job._id)} className="btn btn-error text-white  btn-xs">Delete</button>
            </th>
          </tr>
        ))
    }
  
    
     
    </tbody>

    </table>
  
</div>
    </div>
  )
}

export default MyApplication
