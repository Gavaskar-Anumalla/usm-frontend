import React from "react";

import MasterService from "../Services/MasterService";
import './Search.css';
import { useState } from "react";
import Nav from './Nav';
import IsinTable from "./IsinTable";

const Isin = () => {
const [isinNumber, setIsinNumber] = useState("");
const [securityMaster, setSecurityMaster] = useState({
    data:'',
    loading:true
})
   const searchByIsin=(e)=>{
        e.preventDefault();
        MasterService.getByIsin(isinNumber).then((Response)=>{
            setSecurityMaster({
                data:Response.data,
                loading:false
            }
            
            )
            console.log(securityMaster.data)
        }
        
        ) 
    }
    
    return (
        <><Nav></Nav>
            {/* <div className="background"> */}
            <div class="container">

                <div class="row height d-flex justify-content-center align-items-center">

                    <div class="col-md-8">

                        <div class="search" align="center">
                            <br></br>
                            <input type="text" class="form-control " placeholder="&#128270; Search by ISIN" onChange={(e)=>setIsinNumber(e.target.value)} />
                            <button class="btn btn-primary anybutton" onClick={searchByIsin}>Search</button>
                        </div>

                    </div>

                </div>
            </div>
            <IsinTable securityMaster={securityMaster}></IsinTable>
            
            {/* </div> */}

        </>
    )
}
export default Isin;