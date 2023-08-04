import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import StoreData from "./Store";
import "./style.css"
import AddNewStudent from "./AddNewStudent";
import EditStudent from "./EditStudent";

const RouteCompo=()=>{
    const [studentData , setStudentData] = useState([
        {Name:'John', Age: 28 , Course: "MERN" , Batch: "EA23"},
        {Name:'Sahil', Age: 23 , Course: "MEAN" , Batch: "EA123"},
        {Name:'Sumit', Age: 21 , Course: "Data Science" , Batch: "EA43"},
        {Name:'Rohit', Age: 24 , Course: "JAVA" , Batch: "EA30"},
        {Name:'Dheeraj', Age: 23 , Course: "javaScript" , Batch: "EA23"},
    ])
    return(
        <div>
            <BrowserRouter>
            <div className="links">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/student">Student</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink></div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/student" element={<StoreData.Provider value={{stuname: studentData, updateStu: setStudentData}}>
                    <Student />

                </StoreData.Provider>}></Route>
                <Route path="/newStudent" element={<StoreData.Provider value={{stuname : studentData , updateStu : setStudentData}}>
                    <AddNewStudent/>
                </StoreData.Provider>}></Route>

                <Route path={"/editStudent"} element={<StoreData.Provider value={{stuname : studentData , updateStu : setStudentData}}>
                    <EditStudent/>
                </StoreData.Provider>}> </Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteCompo