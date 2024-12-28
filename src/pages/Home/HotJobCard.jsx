import React from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";


const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;

  return (
    <div className="card bg-base-100  shadow-xl">
      <div className="flex gap-3 p-4">
        <figure>
          <img className="w-12" src={company_logo} alt="Shoes" />
        </figure>
        <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex gap-2 items-center"><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
            {
                requirements.map((skill,idx)=><span className="p-2 bg-gray-300 rounded-xl" key={idx}>{skill}</span>)
            }
        </div>
        <div className="card-actions justify-end items-center">
            <p className="flex text-[12px] items-center">Salary:<FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <button className="btn btn-primary btn-sm">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
