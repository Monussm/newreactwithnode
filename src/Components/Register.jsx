import { NavLink } from "react-router-dom";
const Register=()=>{
return<>
<div className="container">
    <div className="row mx-auto">
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="row ">
                        <h4>Sign up</h4>
                    </div>
                    <form action="/register" method="post">
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="yourname" id="yourname" placeholder="Your Name"/>
                    </div>
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="youremail" id="youremail" placeholder="Your Email"/>
                    </div>
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="mobilenumber" id="mobilenumber" placeholder="Mobile Number"/>
                    </div>
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="profession" id="profession" placeholder="Your Profession"/>
                    </div>
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="row border-bottom mx-auto">
                        <input className="mt-3 border-0" type="text" name="confirmpassowrd" id="confirmpassowrd" placeholder="Confirm your password"/>
                    </div>
                    <div className="row mx-auto">
                        <button className="mt-3 mb-3 bg-primary text-light fw-bold border-primary rounded" type="submit">Register</button>
                    </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <img className="rounded" src="../Image/anthony.jpg" alt="anthony.jpg" style={{height:"inherit"}}/>
                    </div>
                    <div className="row">
                        <NavLink to="/login" className="text-center text-decoration-none text-dark">I am already register</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
}
export default Register;