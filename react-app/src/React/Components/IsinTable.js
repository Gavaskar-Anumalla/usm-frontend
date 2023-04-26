import React from "react";
const IsinTable=({securityMaster})=>{

    return <>
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
                                <th>Last Price</th>  
                                <th>Close Price</th>  
                            </tr>
}
                        </thead>
                        <tbody>
                            {
                             securityMaster.loading?'': //console.log(obj);
                                <tr key={securityMaster.data.isinNumber}>
                                    <td>{securityMaster.data.exchange}</td>
                                    <td>{securityMaster.data.country}</td>
                                    <td>{securityMaster.data.currency}</td>
                                    <td>{securityMaster.data.isinNumber}</td>
                                    <td>{securityMaster.data.symbol}</td>
                                    <td>{securityMaster.data.nameOfCompany}</td>
                                    <td>{securityMaster.data.series}</td>
                                    <td>{securityMaster.data.sector}</td>
                                    <td>{securityMaster.data.industry}</td>
                                    <td>{securityMaster.data.gics}</td> 
                                    <td>{securityMaster.data.closePrice}</td> 
                                    <td>{securityMaster.data.lastPrice}</td> 
                                </tr>
                                
                           }
                        </tbody>

                    </table>
                </div>

            </div>
    </>

}
export default IsinTable;