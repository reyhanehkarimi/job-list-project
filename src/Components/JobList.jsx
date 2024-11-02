/*eslint-disable*/
import { useDispatch, useSelector } from "react-redux";
import '../styles/job-list.css';
import jobData from '../../data.json';
import { setFilter } from "../redux/listSlice";

function JobList() {
    const dispatch = useDispatch();
    const roleFilter = useSelector((state) => state.list.roleFilter);

    const jobFilter = roleFilter ? jobData.filter((job) => 
        job.role === roleFilter ||
        job.level === roleFilter ||
        job.languages.includes(roleFilter) ||
        job.tools.includes(roleFilter)
    ) : jobData;

    const handleClick = (role) => {
        dispatch(setFilter(role));
    };

    return (
        <div>
            <img className="header" src="./images/bg-header-desktop.svg" alt="header" />
            {jobFilter.map(job => ( 
                <div className="parent-job-cart" key={job.id}>
                    <img className="logo-of-cart" src={job.logo} alt="" />
                    
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
