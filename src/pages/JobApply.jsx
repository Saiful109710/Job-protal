import React from 'react'
import { useParams } from 'react-router-dom'

const JobApply = () => {

    const {id} = useParams()
    console.log(id)

    const handleSubmit = (e)=>{
        e.preventDefault();

        const linkedin = e.target.linkedin.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;

        console.log(linkedin,github,resume)
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
