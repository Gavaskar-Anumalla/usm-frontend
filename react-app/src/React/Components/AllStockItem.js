import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditComponent from './EditComponent';
function AllStockItem({securityMaster,onClickDelete}) {
    
    

  return (
    <>
    
    <div>
        <div>
                <div className="container">
                    <br></br>
                    <br></br>
                    <table className="table table-bordered">
                    
                        <thead>
                        { 
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
                                <th>Action</th> 
                            </tr>
                        }
                        </thead>
                        
                        <tbody>
                            {
                             
                             securityMaster.map(item=>
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
                                    <td>{item.closePrice}</td> 
                                    <td>{item.lastPrice}</td> 
                                    <td><div style={{display:'flex'}}>
                                        {/* <button onClick={()=>{onClickUpdateEventHandler(item)}}>Update</button> */}
                                        <Link className='btn btn-info'  style={{marginRight:"20px"}} to="/edit" state={{ editableStock: item }} >update</Link>
                                    <button className='btn btn-danger'  onClick={()=>{onClickDelete(item.isinNumber)}} >delete</button></div></td>
                                    {/* ()=>{onClickDelete(item.isinNumber)} */}
                                    {/* data-bs-toggle="modal" data-bs-target="#exampleModal" */}
                                </tr>)
                                    //<Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                             )
                                
                                
                           }
                        </tbody>

                    </table>
                </div>

            </div>
    </div>
    </>
  )
}

export default AllStockItem