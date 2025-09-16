import React, { useState } from 'react';
import { MdLocationOn, MdWork } from 'react-icons/md'; 

function JobCard({ job, onSave }) {
  const [isSaved, setIsSaved] = useState(false);

  const logoUrl = `https://logo.clearbit.com/${job.domain}`;

  const handleSaveClick = () => {
    onSave(job);
    setIsSaved(true);
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <img 
          src={logoUrl} 
          alt={`${job.company} logo`} 
          className="company-logo"
         
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div>
          <h3 className="job-company">{job.company}</h3>
          <h2 className="job-title">{job.title}</h2>
        </div>
      </div>

      <div className="job-card-details">
        <span className="detail-item">
          <MdLocationOn /> {job.location}
        </span>
      </div>

      <button 
        onClick={handleSaveClick} 
        disabled={isSaved}
        className={`save-button ${isSaved ? 'saved' : ''}`}
      >
        {isSaved ? 'Saved ✔' : 'Save Job'}
      </button>
    </div>
  );
}

export default JobCard;