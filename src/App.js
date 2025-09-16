import React, { useState, useEffect } from "react";
import JobCard from "./components/JobCard";
import SearchBar from "./components/SearchBar";
import SavedJobs from "./components/SavedJobs";
import { MOCK_JOBS } from "./mockData";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const [savedJobs, setSavedJobs] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const timer = setTimeout(() => {
      setJobs(MOCK_JOBS);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSaveJob = (jobToSave) => {
    if (!savedJobs.find((job) => job.id === jobToSave.id)) {
      setSavedJobs([...savedJobs, jobToSave]);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Job Board</h1>
        <SearchBar onSearch={setSearchTerm} />
      </header>

      <div className="main-content">
        <main>
          <h2>Job Postings</h2>
          {isLoading ? (
            <p>Loading jobs...</p>
          ) : (
            <div className="job-list">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onSave={handleSaveJob} />
              ))}
            </div>
          )}
        </main>

        <aside>
          <SavedJobs savedJobs={savedJobs} />
        </aside>
      </div>
    </div>
  );
}

export default App;
