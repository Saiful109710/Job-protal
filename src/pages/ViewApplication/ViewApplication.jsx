import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const { job_id } = useParams();
  const [totalApplication, setTotalApplication] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/job-applications/jobs/${job_id}`)
      .then((res) => res.json())
      .then((data) => {
        setTotalApplication(data);
      });
  }, []);

  const handleStatusUpdate = (e,id)=>{
    console.log(e.target.value,id)

    const  data = {
        status : e.target.value
    }

    fetch(`http://localhost:7000/job-applications/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
    })
  }
  return (
    <div>
      <h2 className="text-3xl">Applications for this job</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {totalApplication.length > 0 ? (
              totalApplication.map((application, idx) => (
                <tr key={application._id}>
                  <th>{idx + 1}</th>
                  <td>{application.application_email}</td>
                  <td></td>
                  <td>
                    <select onChange={(e)=>handleStatusUpdate(e,application._id)} defaultValue={application.status || 'Change Status'} className="select select-bordered select-xs w-full max-w-xs">
                      <option  disabled >
                        Change Status
                      </option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <p className="text-3xl text-center">No Application </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
