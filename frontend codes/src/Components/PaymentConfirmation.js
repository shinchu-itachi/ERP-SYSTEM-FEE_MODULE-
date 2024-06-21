import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import tick from '../images/check.png'
import img from '../images/clg-logo.png'


const PaymentConfirmation = () => {

    const navigate = useNavigate()

    const { regno } = useParams()
    const regnoUrl = atob(regno)

    console.log(regno, regnoUrl)

    const [paydetail, setPayDetail] = useState([])

    const clear = () => {
        setPayDetail('')
    }

    const getData = async () => {
        const resData = await fetch(`/paydetails/${regnoUrl}`);
        setPayDetail(await resData.json())
    }

    const redir = () =>{
        window.alert("Successfully Logout") 
        navigate('/')
    }

    useEffect(() => {
        getData()
    }, [])






    return (
        <div className="container-fluid nav-bg" >
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="row ">
                        <div className="col-md-3 pt-4 order-2 order-lg-1" style={{ height: "100%" }}>
                            <div className="menu-option" style={{ border: "3px solid black", boxShadow: "-2px 0 5px black", backgroundColor: "#f7f1e3" }} >
                                <div className="clg-name-logo">
                                    <img src={tick} alt="NIT JSR LOGO" className="clg-logo" style={{ display: "inherit" }}>
                                    </img>
                                </div>

                                <div className="clg-name">
                                    <h5 style={{ textAlign: "center", marginTop: "30px", marginBottom: "60px", textShadow: " -3px 0 2px white", color: "black", fontFamily: "cursive", fontSize: "20px", fontWeight: "bold" }}> Transaction Done Successfully </h5>

                                    <h6 style={{ textAlign: "center", marginBottom: "0px", textShadow: " -3px 0 2px white", color: "black", fontFamily: "cursive", fontSize: "15px", fontWeight: "bold" }}> Your fee amount is received.. </h6>
                                </div>
                                <br /><br /><br />
                            </div>
                        </div>
                        <div className="content-box-stu col-md-8 pt-4 pt-lg-10 order-2 order-lg-1 justify-content-right" style={{ height: "100%" }} >
                            <div className="st-box" style={{ border: "0px solid black", height: "100%" }}>

                                <table class="table  table-hovered">
                                    <thead>
                                        <tr>

                                            <th />
                                            <th />
                                            <th scope="col" cellSpacing="5px" colSpan='2' style={{ textAlign: "center" }}><img src={img} alt="NIT JSR " style={{ height: "70px" }} /></th>
                                            <th scope="col" style={{ textAlign: "justify" }}><h4 style={{ fontSize: "25px", color: "#f5cd79", textShadow: "-2px 0 3px black", textAlign: "center", fontFamily: "Roborto Mono" }}>FEE PAYMENT DETAILS</h4></th>
                                            <th />
                                            <th ><img src={img} alt="NIT JSR " style={{ height: "70px" }} /></th>
                                            <th />

                                        </tr>


                                    </thead>

                                </table>

                                <table >
                                    <tr>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Registration Number </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "##f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Registration_Id} readonly size={40} autofill="false"></input>
                                        </td>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Student Name  </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Student_Name} readonly size={40} autofill="false"></input>
                                        </td>

                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}> Course  </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Course} readonly size={30} autofill="false"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Semester </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Semester} readonly size={40} autofill="false"></input>
                                        </td>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Receipt Number  </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Receipt_Id} readonly size={40} autofill="false"></input>
                                        </td>

                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}> Payment Id  </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Payment_Id} readonly size={30} autofill="false"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Merchant Id </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "##f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Order_Id} readonly size={40} autofill="false"></input>
                                        </td>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Payment Method  </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Payment_Method} readonly size={40} autofill="false"></input>
                                        </td>

                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}> Fee Amount  </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={`₹ ${paydetail.Amount}`} readonly size={30} autofill="false"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Contact Number </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "##f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Contact} readonly size={40} autofill="false"></input>
                                        </td>
                                        <td>
                                            <label className="st_name" style={{ fontFamily: "monospace", fontSize: "20px" }}>Payment Date and Time </label>
                                            <input type="text" id="studentName" className="st-n" spellCheck="false" style={{ color: "#f5f6fa", fontWeight: "bold", fontSize: "15px", cursor: "not-allowed", borderBottom: "0px" }} value={paydetail.Payment_Date} readonly size={40} autofill="false"></input>
                                        </td>



                                    </tr>
                                    <tr >
                                        <td >
                                            <form  method = "GET" action = {`http://localhost:8000/pdf/${regnoUrl}`}>
                                            <button className="btn btn-primary " type="submit" style={{ marginTop: "10px" }}>
                                                Download Payment Receipt
                                            </button>
                                            </form>
                                        </td>
                                        <td >
                                            <button className="btn btn-primary " type="submit" style={{ marginTop: "10px" }} onClick={redir }>
                                                End the Session
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                                
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentConfirmation
