import React, { useReducer } from 'react';
import { jobs as allJobs } from '../../data/jobs';
import './JobFilter.css';
import { Job } from '../../types/jobs';
import { filterReducer, initialState, experienceOptions } from './reducer';

export const JobFilter: React.FC = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const filteredJobs = allJobs.filter(
    (job) => state.experience === 'Любой' || job.experience === state.experience
  );

  return (
    <div className="job-filter-container">
      <h1>Вакансии</h1>

      <div className="filter">
        <label htmlFor="experience">Опыт:</label>
        <select
          id="experience"
          value={state.experience}
          onChange={(e) =>
            dispatch({ type: 'SET_EXPERIENCE', payload: e.target.value as Job['experience'] })
          }
        >
          {experienceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="job-list">
        {filteredJobs.map((job) => (
          <div className="job-card fade-in" key={job.id}>
            <h2>{job.title}</h2>
            <p><strong>Зарплата:</strong> {job.salary}</p>
            <p><strong>Локация:</strong> {job.location}</p>
            <p><strong>Опыт:</strong> {job.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};