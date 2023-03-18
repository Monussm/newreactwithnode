const Contact=()=>{
return <>

<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="row mt-4">
                <h5>Phone : 12345678910</h5>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row mt-4">
                <h5>Email : e.g123@gmail.com</h5>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row mt-4">
            <h5>Address: Anywhere</h5>
            </div>
        </div>
        <div className="row mt-5">
        <h3>Get in touch</h3>
    </div>
    <div className="col-md-4">
            <div className="row mt-4 mx-auto">
           <input  type="text" name="yourname" id="yourname" placeholder="Your Name"/>
            </div>
        </div>
        <div className="col-md-4">
        <div className="row mt-4 mx-auto">
        <input type="text" name="mobilenumber" id="mobilenumber" placeholder="Mobile Number"/>
        </div>
        </div>
        <div className="col-md-4">
            <div className="row mt-4">
            <div className="row border-bottom mx-auto">
                        <input  type="text" name="emailid" id="emailid" placeholder="emailid"/>
                    </div>
            </div>
        </div>
     


    
    </div>
</div>




</>



}
export default Contact;