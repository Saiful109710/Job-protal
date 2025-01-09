import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {

    const {user} = useAuth()

    const handleAddJob = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)

        const {min,max,currency,...newJob} = initialData
        console.log(newJob)
<<<<<<< HEAD
        newJob.salaryRange = {min:parseInt(min),max:parseInt(max),currency}
=======
        newJob.salaryRange = {min,max,currency}
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)


        fetch('http://localhost:7000/jobs',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newJob)
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
        })
    }
  return (
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <form onSubmit={handleAddJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="job location"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select defaultValue={"Pick a Job type"} name="jobType" className="select select-ghost w-full max-w-xs">
            <option disabled >
              Pick a Job type
            </option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select defaultValue={"Pick a Job Field"} name="jobField" className="select select-ghost w-full max-w-xs">
            <option disabled >
              Pick a Job Field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salary range */}
        <div className="">
            <label htmlFor="">Salary Range</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input
<<<<<<< HEAD
              type="number"
=======
              type="text"
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a
              name="min"
              placeholder="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
<<<<<<< HEAD
              type="number"
=======
              type="text"
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a
              placeholder="max"
              name="max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select defaultValue={'Currency'} name="currency" className="select select-ghost w-full max-w-xs">
              <option disabled >
                Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
              
            </select>
          </div>
        </div>
        </div>
        {/* job description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea name="jobDescription" className="textarea textarea-bordered" placeholder="Job description" required></textarea>

        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            className="input input-bordered"
            required
          />
        </div>
        {/* requirement */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea name="requirements" className="textarea textarea-bordered" placeholder="Put each requirement in new line" required></textarea>

        </div>
        {/* responsibility */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibility</span>
          </label>
          <textarea name="responsibilities" className="textarea textarea-bordered" placeholder="Put each responsibility in new line" required></textarea>

        </div>
        {/* HR_name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Hr name"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR_email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
<<<<<<< HEAD
          readOnly
=======
>>>>>>> 96423754fb3413c255a20edb6005d9b1c28efb5a
            type="text"
            name="hr_email"
            defaultValue={user?.email}
            placeholder="Hr Email"
            className="input input-bordered"
            required
          />
        </div>
         {/* Company Url */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo Url</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company logo url"
            className="input input-bordered"
            required
          />
        </div>
        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Hr name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
