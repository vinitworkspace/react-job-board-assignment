import React from 'react';

function SavedJobs({ savedJobs }) {
  return (
    <div className="saved-jobs">
      <h2>Saved Jobs ({savedJobs.length})</h2>
      {savedJobs.length === 0 ? (
        <p>You have no saved jobs.</p>
      ) : (
        <ul>
          {savedJobs.map(job => (
            <li key={job.id}>
              {job.title} at {job.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedJobs;