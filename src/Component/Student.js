import React, { useContext } from "react";
import StoreData from "./Store";
import { NavLink, useNavigate } from "react-router-dom";
import "./Student.css"
const Student=()=>{
    const Navi =useNavigate()
    const contextData= useContext(StoreData)
    console.log(contextData);
    return(
       <>
             <div className="student__main">
            <div className="studentHead">
                <div className="studentText">Student Details</div>
                <button onClick={()=>Navi('/newStudent')} className="studentAddBtn">Add New Student</button>
            </div>
            
            <div>
            <div className="grid__container grid__border">
                <div className="grid__item">Name</div>
                <div className="grid__item">Age</div>
                <div className="grid__item">Course</div>
                <div className="grid__item">Batch</div>
                <div className="grid__item">Change</div>

                </div>
                {
                    contextData.stuname.map((e,index)=>{
                        return(
                            <div key={index}>
                            <div  className="grid__container">
                            <div   className="grid__item">{e.Name}</div>
                            <div  className="grid__item">{e.Age}</div>
                            <div  className="grid__item">{e.Course}</div>
                            <div  className="grid__item">{e.Batch}</div>
                            <div  className="grid__item"><NavLink state={{data : index}} to={"/editStudent"}>Edit</NavLink></div>
                            </div>
                            </div>
                        )
                    })
                }

        </div>
        </div>
       
       </>
    )
}

export default Student