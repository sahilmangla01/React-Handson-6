import React, { useContext } from "react";
import StoreData from "./Store";
import { useNavigate } from "react-router-dom";
import "./Form.css"

const AddNewStudent=()=>{
    const ContextData = useContext(StoreData)
    const Navi =useNavigate()
    
    const newStu = {
        Name :'',
        Age:'',
        Course:'',
        Batch:''
    }

    const handleChange = (e)=>{
        newStu[e.target.name] = e.target.value
    }

    const handleClick = (e)=>{
        
        ContextData.stuname.push(newStu)
        Navi('/student')
    }
    return(
        <div className=" form__main">
            <h1 className="heading">New Student</h1>

            <form  >            
                
                <div className="form">

                 <div className='display '>
                <input type="text"  name="Name"  onChange={handleChange} autoComplete="off"/>
                <span className='span1'>Name</span>
                </div>
            
   
                <div className='display '>
                <input type="text"  name="Age"  onChange={handleChange} autoComplete="off"/>
                <span className='span1'>Age</span>
                </div>
                </div>

                <div className="form">
                   
                <div className='display '>
                <input type="text"  name="Course"  onChange={handleChange} autoComplete="off"/>
                <span className='span1'>Course</span>
                </div>

                <div className='display '>
                <input type="text"  name="Batch"  onChange={handleChange} autoComplete="off"/>
                <span className='span1'>Batch</span>
                </div>
                </div>

                <div className="buttons">
                <button className="btn cancel__btn" onClick={()=>Navi('/student')}>Cancel</button>
                <button  className="btn" type="button" onClick={handleClick}>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default AddNewStudent