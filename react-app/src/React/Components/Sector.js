import React, { useState } from "react";
import './Search.css';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import MasterService from "../Services/MasterService";
const Sector = () => {
    const [sector, setSector] = useState('');
    const [securityMaster,setSecurityMaster]=useState({
        data:[],
      loading:true});

      const searchBySector=(e)=>{
        e.preventDefault();
        MasterService.getBySector(sector).then((Response)=>{
            setSecurityMaster({
                data:Response.data,
                loading:false
            }     
    )
            console.log(securityMaster.data)
        }
        
        ) }
    
    return (
        <>  <Nav></Nav>
                <div class="container">

                    <div class="row height d-flex justify-content-center align-items-center">

                        <div class="col-md-8">

                            <div class="search" align="center">
                                <br></br>
                                <input type="text" class="form-control " placeholder="&#128270; Search by Sector" onChange={(e)=>{setSector(e.target.value)}} />
                                <button class="btn btn-primary anybutton" onClick={searchBySector}>Search</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                <div className="container">
                    <br></br>
                    <br></br>
                    <table className="table table-bordered">
                        <thead>
                        {securityMaster.loading?'': 
                            <tr>
                                <th>Exchange</th>
                                <th>Country</th>
                                <th>Currency</th>
                                <th>ISIN Number</th>
                                <th>Symbol</th>
                                <th>CompanyName</th>
                                <th>Series</th>
                                <th>Sector</th>
                                <th>Industry</th>
                                <th>GICS</th>  
                            </tr>
}
                        </thead>
                        <tbody>
                            {
                             securityMaster.loading?'': 
                             securityMaster.data.map(item=>
                                (<tr key={item.isinNumber}>
                                    <td>{item.exchange}</td>
                                    <td>{item.country}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.isinNumber}</td>
                                    <td>{item.symbol}</td>
                                    <td>{item.nameOfCompany}</td>
                                    <td>{item.series}</td>
                                    <td>{item.sector}</td>
                                    <td>{item.industry}</td>
                                    <td>{item.gics}</td> 
                                </tr>)
                                    
                             )
                                
                                
                           }
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}
export default Sector;