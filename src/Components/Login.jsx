import { NavLink } from "react-router-dom";
import React from "react";
const Login=()=>{
return <>
<div className="container">
    <div className="row">
    <div className="col-md-6">
    <div className="row">
     <img className="rounded" src="../Image/anthony.jpg" alt="anthony.jpg" style={{height:"inherit"}}/>
    </div>
    <div className="row">
     <NavLink to="/register" className="text-center text-decoration-none text-dark">Create an account</NavLink>
    </div>
    </div>
    <div className="col-md-6">
        <div className="row">
        <form action="/login" method="post">
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="youremail" id="youremail" placeholder="Your Email"/>
                    </div>
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="row mx-auto">
                        <button className="mt-3 mb-3 bg-primary text-light fw-bold border-primary rounded" type="submit">Login</button>
                    </div>
                    </form>
        </div>
    </div>
    </div>
</div>


</>


}
export default Login;