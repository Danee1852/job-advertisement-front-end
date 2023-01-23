//import JobData from "./jobsData"
//import {data} from "../../public/jobsData"
import {Link} from "react-router-dom"
import "./JobList.css"
import Navbar from "../Navbar/Navbar"

export default function JobList({listOfJobs}) {

    // Put the state up for sharing data with other components

    // const [listOfJobs, setListOfJobs] = useState(false)
    
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8000/jobList')
    //         const json = await response.json()
    //         setListOfJobs(json)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // },[])

    //console.log(listOfJobs)

    

    const jobElements = listOfJobs && listOfJobs.map(job => { 

        return (
            
            <div key = {job.id} className="jobWrapper">
                <div className="companyLogo">
                    <Link to={`/jobDetails/${job.id}`}>
                        <img className = "company_logo" src = {job.logo} alt="logo"/>
                    </Link>
                </div>
                <div className="mainInfo">
                    <h3 className="positionName">{job.position}</h3>
                    <h2 className="companyName">{job.company}</h2>
                    <div className="companyDetails">
                       <span> {job.location} ‣ </span>
                       <span> {job.postedAt} ‣ </span>
                        {job.contract.map((contr, index) => {
                            
                        return (   
                                 <span key={index}>{contr.contractName} </span> 
                        )
                       })}
                    
                    </div>
                </div>
                <div className="jobTechStack">
                    {job.languages.map((language, index)=> {
                        return (
                            
                                <span key= {index}className="language_span">{language.languageName}</span>
                            
                        )
                    })}
                </div>
            </div>
             )
    })

    return (
        <div>
            <Navbar />
            
            <div className="jobBoard">
                <Link to="/addNewJob">
                    <div>
                        <button className ="addNewJobButton" >Add new Job Offer</button>
                    </div>
                </Link>
               {jobElements}
            </div>
        </div>
    )
}