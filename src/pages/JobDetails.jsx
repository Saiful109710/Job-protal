import Lottie from 'lottie-react';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import detailLottie from '../assets/lottie/jobDetailLottie.json'

const JobDetails = () => {

    const job = useLoaderData();
    const {_id,applicationDeadline,category,company,company_logo,description,hr_email,hr_name,jobType,location,requirements,responsibilities,salaryRange,status,title} = job
    
  return (
    <div className='p-10 bg-gray-200 space-y-1 rounded-xl my-5 grid md:grid-cols-2 gap-5'>
     <div className='space-y-2'>
     <h2 className='text-3xl font-bold'>{title}</h2>
      <p>Company Name: {company}</p>
      <p>Description : {description}</p>
      <p>Category : {category}</p>
      <p>Job Type : {jobType}</p>
      <p className='flex gap-2'>Requirement : <div>
            {requirements.map(requirement=><p>{requirement}</p>)}
        </div></p>
        <p className='flex gap-2'>Responsibilities : <div>
            {responsibilities.map(responsibility=><p>{responsibility}</p>)}
        </div></p>
      <p>Hr Name: {hr_name}</p>
      <p>Hr Email : {hr_email}</p>
      <p>Location : {location}</p>
      <p>Job Type : {jobType}</p>
      <p>Salary Range : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
      <p>Deadline : {applicationDeadline}</p>
      <Link to={`/jobApply/${_id}`}><button className='btn bg-purple-500 text-white'>Apply This Job</button></Link>
     </div>
     <div>
        <Lottie animationData={detailLottie}></Lottie>
     </div>
    </div>
  )
}

export default JobDetails
