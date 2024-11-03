/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import '../styles/job-list.css';
import jobData from '../../data.json';
import { setFilter, clearFilters, deleteRole } from "../redux/listSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

function JobList() {
    const dispatch = useDispatch();
    const filterRole = useSelector((state) => state.list.filterRole);

    const jobFilter = filterRole.length > 0 
        ? jobData.filter((job) => 
            filterRole.every(filter => 
                job.role === filter || 
                job.level === filter || 
                job.languages.includes(filter) || 
                job.tools.includes(filter)
            )
        )
        : jobData;

    const handleClick = (filter) => {
        dispatch(setFilter(filter));
    };

    const handleClear = () => {
        dispatch(clearFilters());
    };

    const handleDelete = (filter) => {
        dispatch(deleteRole(filter));
    };

    return (
    <div>
        <img className="header" src="./images/bg-header-desktop.svg" alt="header" />

        {filterRole.length > 0 && ( 
            <div className="filter-container">
               {filterRole.map(filter => (
                <div className="parent-delete-role" key={filter}>
                <span className="filter-item">{filter}</span>
                <button className="Xmark-icon-btn" onClick={() => handleDelete(filter)}>
                    <FontAwesomeIcon icon={faXmark} className="Xmark-icon" />
                </button>
            </div>
        ))}
        <button onClick={handleClear} className="btn-clear">Clear</button>
        </div>
        )}

{jobFilter.length > 0 && jobFilter.map(job => ( 
    <div className="parent-job-cart" key={job.id}>
       <img className="logo-of-cart" src={job.logo} alt="job-logo" />
                
    <div style={{ marginLeft: '1rem', flexGrow: 1 }}>
        <div style={{ display: 'flex', gap: '5px' }}>
        <h2 className="company-name">{job.company}</h2>
        {job.new && <span className="NEW">NEW!</span>}
        {job.featured && <span className="FEATURED">FEATURED</span>}
    </div>

     <div>
        <h3 style={{ fontSize: '15px', fontWeight: '700', paddingBottom: "3px", paddingTop: "3px" }}>{job.position}</h3>
     </div>

    <div>
        <p style={{ fontSize: '13px' }}>{`${job.postedAt} • ${job.contract} • ${job.location}`}</p>
        <hr className="line" style={{display:'none'}}/>
    </div>

    </div>

    <div className="right-align">
        <button onClick={() => handleClick(job.role)}>{job.role}</button>
        <button onClick={() => handleClick(job.level)}>{job.level}</button>
        {job.languages.map(language => (
        <button key={language} onClick={() => handleClick(language)}>{language}</button>
        ))}
        {job.tools.map(tool => (
            <button key={tool} onClick={() => handleClick(tool)}>{tool}</button>
        ))}
        </div>
    </div>
        ))}
    </div>
    );
}

export default JobList;
