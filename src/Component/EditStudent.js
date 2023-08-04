import React from "react";
import "./Form.css"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import StoreData from "./Store";
import { useLocation } from "react-router-dom";


const EditStudent=()=>{
    const indexValue = useLocation().state.data;
    console.log(indexValue)
    
    const Navi = useNavigate();

    const ContextData = useContext(StoreData);

    const updateobj ={
        Name:ContextData.stuname[indexValue].Name,
        Age : ContextData.stuname[indexValue].Age,
        Course:ContextData.stuname[indexValue].Course,
        Batch:ContextData.stuname[indexValue].Batch
    }

    const handleChange = (e)=>{
        updateobj[e.target.name] =  e.target.value
    }

    const handleClick = ()=>{
        
        ContextData.stuname[indexValue] = updateobj
        
        Navi('/student')
    }
        return(
            <div className=" form__main">
                <h1 className="heading">Edit Student</h1>
    
                <form  >            
                    
                    <div className="form">
                        
                    <input type="text"  name="Name" placeholder={ContextData.stuname[indexValue].Name} onChange={handleChange} autoComplete="off"/>
    
                
                    <input type="number"  name="Age" placeholder={ContextData.stuname[indexValue].Age}  onChange={handleChange} autoComplete="off"/>
                    </div>
    
                    <div className="form">
                    <input type="text" name="Course" placeholder={ContextData.stuname[indexValue].Course} onChange={handleChange} autoComplete="off" />
                
                
                    <input type="text"  name="Batch" placeholder={ContextData.stuname[indexValue].Batch} onChange={handleChange} autoComplete="off" />
                    </div>
    
                    <div className="buttons">
                    <button className="btn cancel__btn" onClick={()=>Navi('/student')}>Cancel</button>
                    <button  className="btn" type="button" onClick={handleClick}>Submit</button>
                    </div>
                </form>
    
            </div>
        )
    
}

export default EditStudent;