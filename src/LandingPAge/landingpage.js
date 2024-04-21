import React from "react";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";


function LandingPage() {

  const navigate=useNavigate()

 const onClickNavigate=()=>{
    navigate('./content')
  }
  
  return (
    <div>
      <h1 className="heading">Nature</h1>
      <pre className="para">Every problem will be solved, if                    
        you had a long walk in nature</pre>
        <div className="btn-landing">
        
        <button className="button-ele" onClick={onClickNavigate}>Read More...</button>
        
        </div>
    </div>
  );
}

export default LandingPage;