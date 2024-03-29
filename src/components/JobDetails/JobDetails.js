import { useParams } from "react-router-dom"
import "./JobDetails.css"
import Navbar from "../Navbar/Navbar.js"
import locationPicture from "../../images/Location_Line.svg"
import contractPicture from "../../images/Paper_Line.svg"
import levelPicture from "../../images/Level Up_Line.svg"
import clockPicture from "../../images/24 hours_Line.svg"

export default function JobDetails({listOfJobs,checkTheTime}) {

    const {id} = useParams();
    const numericId = parseInt(id)
    const jobs = listOfJobs;
    
    const jobDetail = jobs && jobs.filter(job => job.id === numericId).map((job) => {
        
        
        return (
            
            <div key = {job.id} className="jobDetailWrapper">
                <div className="jobDetailHeader">
                    <img className = "jobCompanyLogo" src = {job.logo} alt="logo"/>
                    <div className="jobDetailHeaderText">
                        <h2 className="positionName">{job.position}</h2>
                        <p>{job.company}</p>
                    </div>
                </div>
                <div className="jobDetailMainInfo">
                    <div className="mainInfoContainer">
                        <img className = "jobDetailIcons" src = {locationPicture} alt="location"/>
                        <p className="mainInfoText">{job.location}</p>
                    </div>
                    <div className="mainInfoContainer">
                         <img className = "jobDetailIcons" src = {contractPicture} alt="location"/>
                         <div className="mainInfocontractContainer">
                            {job.contract.map((contr, index) => {
                                return (   
                                        <p className="mainInfoTextContract" key={index}>{contr.contractName} </p> 
                                )
                            })}
                           </div>
                    </div>
                    <div className="mainInfoContainer">
                         <img className = "jobDetailIcons" src = {levelPicture} alt="location"/>
                         <p className="mainInfoText">{job.level}</p>
                    </div>
                    <div className="mainInfoContainer">
                        <img className = "jobDetailIcons" src = {clockPicture} alt="location"/>
                        <p className="mainInfoText">{checkTheTime(job.postedAt)}</p>
                        </div>
                </div>
                <div className="jobDetailDescription">
                        <h3>Description:</h3>
                        <p>{job.description}</p>
                </div>
                <div className="jobDetailResponsible">
                    <h3>You would be responsible for:</h3> 
                    {job.responsibles.map((res,index)=> {
                        return(
                            <li key={index}>{res.responsible}</li>
                        )
                    })}
                </div>
                <div className="jobDetailTechStack">
                    <h3>Requirements:</h3>
                    <div className="techstackWrapper">
                        <div>
                            <p>Languages: </p>
                            {job.languages.map((language, index)=> {
                                return (
                                    <li key = {index}>{language.languageName}</li>
                                )
                            })}
                        </div>
                        <div>
                        {job.tools.length > 0 && <p>Tools: </p>}
                        {job.tools.map((tool,index)=> {
                            return (
                                <li key={index}>{tool.toolName}</li>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className="jobDetailBoard">
            <Navbar />
            {jobDetail}
        </div>
    )
}