import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Components/validation-page-navbar.css'
import image from '../images/clg-logo.png'

const Validation = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState([])
    const { regno } = useParams();
    console.log(regno)

    const regnoUrl = atob(regno)

    const getUser = async () => {
        
        try {
            
            const Data = await fetch(`/validation/${regnoUrl}`);

            setUser(await Data.json());
            // console.log(Data.json())

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getUser();
        window.alert("Please Match and Confirm your Details.")
        return () => {
            console.log("Loading....")
        }

    }, [])

    // if (loading) {
    //     return window.alert("Loading....")
    // }





    return (
        <>
            <section id="body-logo-header" className="">
                <div className="container nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-2 order-2 order-lg-1">
                                    <div className="clg-name-logo">
                                        <img src={image} alt="NIT JSR LOGO" className="clg-logo" style={{ display: "inherit" }}>
                                        </img>
                                    </div>
                                    <div className="clg-name">
                                        <h2 className="clg-name-eng">National Institute of Technology</h2>
                                        <h2 className="jsr-eng">Jamshedpur</h2>
                                        <br />
                                        <h2 className="clg-name-hin">राष्ट्रीय प्रौद्योगिकी संस्थान</h2>
                                        <h2 className="jsr-hin"> जमशेदपुर</h2>
                                    </div>
                                </div>
                                <div className=" content-box col-lg pt-5 pt-lg-3 order-3 order-lg-2 d-flex justify-content-center">
                                    <div className="search-area">
                                        <div className="search-container">
                                            <label className="search-heading">
                                                Registration Verification <br />(पंजीकरण सत्यापित करें)
                                            </label>
                                            <br />



                                            <form method="GET" className="search-form" id="form-display">
                                                <label className="stu_name" >Student's Name</label>
                                                <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ cursor: "not-allowed", borderBottom: "0px" }} value={user.Student_Name} readonly size={50} autofill="false"></input>

                                                <label className="stu_name" style={{ paddingTop: "10px" }}>Father's Name</label>
                                                <input type="text" id="fatherName" className="ft-n" spellCheck="false" style={{ cursor: "not-allowed", borderBottom: "0px" }} value={user.Father_Name} readonly size={50} autofill="false"></input>
                                                <label className="stu_name" style={{ paddingTop: "10px" }}>Mother's Name</label>
                                                <input type="text" id="motherName" className="mt-n" spellCheck="false" style={{ cursor: "not-allowed", borderBottom: "0px" }} value={user.Mother_Name} readonly size={50} autofill="false"></input>
                                                <br /> <br />
                                                <button type="submit" className="btn btn-primary sub" name="confirm" value="confirm" onClick={() => { navigate(`/studentdetails/${regno
                                                }`) }}>Confirm</button>
                                                <button type="submit" name="cancel" className="btn btn-primary res" onClick={() => { navigate('/') }} value="cancel">Cancel</button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );



}

export default Validation