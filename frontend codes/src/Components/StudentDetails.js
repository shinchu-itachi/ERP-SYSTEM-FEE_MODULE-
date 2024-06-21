import React, { useEffect, useState } from 'react'
import { Link, useParams , useNavigate} from 'react-router-dom'
// import Menu from '../Components/Menu';
require('../Components/StudentDetails.css')


const Studetail = () => {
    const [user, setUser] = useState([])
    const [pay , setPay] = useState([])
    const navigate = useNavigate();
    const { regno } = useParams();
    console.log(regno)

    const regnoUrl = atob(regno)

    const getUser = async () => {
        try {

            const Data = await fetch(`/studentdetails/${regnoUrl}`);
            // const res = Data.json()
            // console.log(res)
            setUser(await Data.json())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser();
        setPay('₹ 50,075')

        return () => {
            console.log("Loading....")
        }
    }, [])



    return (
        <>
            <div className="student" style={{ position: "relative" }}>
                <div className="container-fluid nav-bg" >
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row ">
                                <div className="col-md-3 pt-3 order-2 order-lg-1" style={{ height: "100%" }}>
                                    <div className="menu-option" style={{ border: "3px solid black", boxShadow: "-2px 0 5px black" }} >
                                        <Link to={`/studentdetails/${regno}`} style={{ color: "white", backgroundColor: "blue", textDecoration: "none", fontFamily: "monoscape", fontSize: "25px", display: "block", padding: "10px", textAlign: "center" }}>Student Details</Link><br />
                                        <Link to={`/payment/${regno}`} style={{ color: "white", textDecoration: 'none', fontFamily: "Roborto", fontSize: "25px", display: "block", padding: "10px", textAlign: "center" }}>Pay Fee</Link><br />
                                        <Link to={`/help/${regno}`} style={{ textDecoration: 'none', color: "white", fontFamily: "Roborto", fontSize: "25px", display: "block", padding: "10px", textAlign: "center" }}>Help</Link><br />
                                        <Link to={`/help`} style={{ textDecoration: 'none', fontFamily: "Roborto", fontSize: "25px", display: "block", paddingTop: "10px", textAlign: "center" }}></Link><br />
                                        <Link to={`/help`} style={{ textDecoration: 'none', fontFamily: "Roborto", fontSize: "25px", display: "block", paddingTop: "10px", textAlign: "center" }}></Link><br />
                                        <Link to={`/help`} style={{ textDecoration: 'none', fontFamily: "Roborto", fontSize: "25px", display: "block", paddingTop: "10px", textAlign: "center" }}></Link><br />
                                        <Link to={`/help`} style={{ textDecoration: 'none', fontFamily: "Roborto", fontSize: "25px", display: "block", paddingTop: "10px", textAlign: "center" }}></Link><br />
                                        <Link to={`/help`} style={{ textDecoration: 'none', fontFamily: "Roborto", fontSize: "25px", display: "block", paddingTop: "10px", textAlign: "center" }}></Link><br />

                                    </div>
                                </div>


                                <div className="content-box-stu col-md-4 pt-3 pt-lg-10 order-3 order-lg-2 justify-content-right" style={{ height: "100%" }} >
                                    <div className="st-box" style={{ border: "0px solid black", height: "100%" }}>
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", padding: "" }}>Registration Number </label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "##f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.Registration_Number} readonly size={50} autofill="false"></input>
                                        <br />
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", paddingTop: "10px" }}>Student Name  </label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.Student_Name} readonly size={50} autofill="false"></input>
                                        <br />
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", paddingTop: "10px" }} >Father's Name</label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.Father_Name} readonly size={50} autofill="false"></input>
                                        <br />
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", paddingTop: "10px" }}>Mother's Name</label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.Mother_Name} readonly size={50} autofill="false"></input>
                                        <br />

                                        { /* Fee Amount to be paid */}
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", paddingTop: "10px" }}>Fee Amount</label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value= {pay} readonly size={50} autofill="false"></input>
                                        
                                    </div>
                                </div>

                                <div className="content-box-stu col-md-4 pt-3 pt-lg-10 order-4 order-lg-3" style={{ height: "100%" }} >
                                    <div className="st-box" style={{ border: "0px transparent black", height: "100%" }}>

                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }} >Date Of Birth</label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.DOB} readonly size={50} autofill="false"></input>
                                        <br />
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", paddingTop: "10px" }}>Course</label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.Course} readonly size={50} autofill="false"></input>
                                        <br />
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", paddingTop: "10px" }}>Semester</label>
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.Semester} readonly size={50} autofill="false"></input>
                                        <br />
                                        <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px", paddingTop: "10px" }}>Batch</label><br />
                                        <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={user.Batch} readonly size={50} autofill="false"></input>
                                        <br />
                                        <br />
                                        
                                        <button className = "Pay btn btn-primary" onClick = { ()=>   navigate(`/payment/${regno}`)} value = "Pay Now" >Pay Now </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="notice">
                        <h6>** To Pay the Fees , please click to <strong>Pay Now</strong> button or <strong>Pay Fee</strong> option on the left side. ** </h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Studetail;