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
                <input type="text"  name="Name" placeholder="Name" onChange={handleChange} autoComplete="off"/>
            
   
                <input type="number"  name="Age" placeholder="Age"  onChange={handleChange} autoComplete="off"/>
                </div>

                <div className="form">
                   
                <input type="text" name="Course" placeholder="Course" onChange={handleChange} autoComplete="off" />

                <input type="text"  name="Batch" placeholder="Batch" onChange={handleChange} autoComplete="off" />
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