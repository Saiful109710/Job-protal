import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
           {
            totalApplication.length>0 ?(
                totalApplication.map((application, idx) => (
                    <tr key={application._id}>
                      <th>{idx+1}</th>
                      <td>{application.application_email}</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                  ))
            ):(
                <p className="text-3xl text-center">No Application </p>
            )
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
