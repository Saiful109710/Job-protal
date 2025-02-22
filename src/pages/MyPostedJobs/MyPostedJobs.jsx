import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const {user} = useAuth();
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:7000/jobs/?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
        })
    },[user?.email])
  return (
    <div>
        <h2>My Posted Jobs:{jobs.length}</h2>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Total Job Application</th>
        <th>Vie Application Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            jobs.map((job,idx)=>(
                <tr key={job._id}>
                <th>{idx+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td><Link to={`/viewApplications/${job._id}`}><button className='btn '>Details</button></Link></td>
              </tr>
            ))
        }
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default MyPostedJobs
