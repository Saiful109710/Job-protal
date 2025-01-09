import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Swal from 'sweetalert2'

const JobApply = () => {

    const {id} = useParams()
      const {user} = useAuth()

      const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault();

        const linkedin = e.target.linkedin.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;

        console.log(linkedin,github,resume)

        const jobApplication = {
          job_id : id,
          application_email : user.email,
          linkedin,
          github,
          resume
        }

        fetch('http://localhost:7000/job-applications',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
          }

          setTimeout(()=>{
            navigate('/myApplications')
          },2000)
          
        })
    }
  return (

   
    <div className="card bg-base-100 w-full  shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin URL</span>
          </label>
          <input name='linkedin' type="url" placeholder="Linkedin URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input name='github' type="url" placeholder="Github url" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input name='resume' type="url" placeholder="Resume url" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>

  )
}

export default JobApply
