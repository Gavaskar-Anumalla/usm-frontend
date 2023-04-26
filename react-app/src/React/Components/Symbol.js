import React from "react";
import './Search.css';
import Nav from "./Nav";
import { useState } from "react";
import MasterService from "../Services/MasterService";
import IsinTable from "./IsinTable";
const Symbol = () => {
    const [symbol, setSymbol] = useState('')
    const [securityMaster, setSecurityMaster] = useState({
        data:'',
        loading:true
    })
    const searchBySymbol=(e)=>{
        e.preventDefault();
        MasterService.getBySymbol(symbol).then((Response)=>{
            setSecurityMaster({
                data:Response.data,
                loading:false
            }
            
    )
            console.log(securityMaster.data)
        }
        
        ) }
    return (
        <>
        <Nav></Nav>
            {/* <div className="background"> */}
                <div class="container">

                    <div class="row height d-flex justify-content-center align-items-center">

                        <div class="col-md-8">

                            <div class="search" align="center">
                                <br></br>
                                <input type="text" class="form-control " placeholder="&#128270; Search by Symbol" onChange={(e)=>{setSymbol(e.target.value)}}/>
                                <button class="btn btn-primary anybutton" onClick={searchBySymbol}>Search</button>
                            </div>

                        </div>

                    </div>
                </div>
                <IsinTable securityMaster={securityMaster}></IsinTable>
                       
        </>
    )
}
export default Symbol;