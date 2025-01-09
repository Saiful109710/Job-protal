import React, { useState } from "react";
import useJobs from "../hooks/useJobs";
import HotJobCard from "./Home/HotJobCard";
import { FaSearch } from "react-icons/fa";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary,setMinSalary] = useState('')
  const [maxSalary,setMaxSalary] = useState('')
  const { jobs, loading } = useJobs(sort, search,minSalary,maxSalary);
  console.log(sort,minSalary,maxSalary);

  if (loading) {
    return <h2>Data is loading.........</h2>;
  }
  return (
    <div>
      <h2 className="text-center font-bold text-3xl">All Jobs</h2>
      <div className="w-11/12 mx-auto bg-base-200 py-5 px-3 flex items-center gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <FaSearch></FaSearch>
        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          className="input w-full"
          placeholder="search by location"
        />
        <div className="space-y-3">
        <input
          onKeyUp={(e) => setMinSalary(e.target.value)}
          type="text"
          className="input input-bordered w-xs"
          placeholder="min salary"
        />
         <input
          onKeyUp={(e) => setMaxSalary(e.target.value)}
          type="text"
          className="input input-bordered w-xs"
          placeholder="max-salary"
        />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
