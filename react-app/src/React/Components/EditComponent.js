import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link ,useLocation, useNavigate} from "react-router-dom";
import MasterService from "../Services/MasterService";

import FetchAll from "./FetchAll";
function EditComponent() {
  const location = useLocation();
  
  const {editableStock} = location.state
  const [exchange, setExchange] = useState(editableStock.exchange);
  const [country, setCountry] = useState(editableStock.country);
  const [currency, setCurrency] = useState(editableStock.currency);
  const [symbol, setSymbol] = useState(editableStock.symbol);
  const [nameOfCompany, setNameOfCompany] = useState(editableStock.nameOfCompany);
  const [series, setSeries] = useState(editableStock.series);
  const [sector, setSector] = useState(editableStock.sector);
  const [industry, setIndustry] = useState(editableStock.industry);
  const [gics, setGics] = useState(editableStock.gics);
  const [closePrice, setClosePrice] = useState(editableStock.closePrice);
  const [lastPrice, setLastPrice] = useState(editableStock.lastPrice);

  const [isinNumber, setIsinNumber] = useState(editableStock.isinNumber);
  const navigate=useNavigate()
  const handleUpdate=(e)=>{
    const securityMaster={exchange,country,currency,isinNumber,symbol,nameOfCompany,series,
   sector,industry,gics,closePrice,lastPrice}
   console.log(securityMaster);
      MasterService.updateStockData(isinNumber,securityMaster).then((Response)=>{
      window.confirm("The Stock Was updated Successfully")
        
      }
      )
      navigate('/');
      
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Edit Master Data</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Exchange:</label>
                  <input
                    type="text"
                    placeholder="Enter Exchange"
                    name="exchange"
                    className="form-control"
                    value={exchange}
                    onChange={(e) => setExchange(e.target.value)}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Country:</label>
                  <input
                    type="text"
                    placeholder="Enter country"
                    name="country"
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Currency:</label>
                  <input
                    type="text"
                    placeholder="Enter currency"
                    name="currency"
                    className="form-control"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Isin Number:</label>
                  <input
                    type="text"
                    placeholder="Enter country"
                    name="isinNumber"
                    className="form-control"
                    value={isinNumber}
                    onChange={(e) => {setIsinNumber(e.target.value)}}
                    readOnly={true}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Symbol:</label>
                  <input
                    type="text"
                    placeholder="Enter Symbol"
                    name="symbol"
                    className="form-control"
                    value={symbol}
                    readOnly={true}
                    onChange={(e) => setSymbol(e.target.value)}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Company Name:</label>
                  <input
                    type="text"
                    placeholder="Enter name of company"
                    name="nameOfCompany"
                    className="form-control"
                    value={nameOfCompany}
                    onChange={(e) => setNameOfCompany(e.target.value)}
                    ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Series:</label>
                  <input
                    type="text"
                    placeholder="Enter series"
                    name="series"
                    className="form-control"
                    value={series}
                    readOnly={true}
                    onChange={(e) => setSeries(e.target.value)}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Sector:</label>
                  <input
                    type="text"
                    placeholder="Enter Sector"
                    name="sector"
                    className="form-control"
                    value={sector}
                    readOnly={true}
                    onChange={(e) => setSector(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Industry:</label>
                  <input
                    type="text"
                    placeholder="Enter industry"
                    name="industry"
                    className="form-control"
                    value={industry}
                    readOnly={true}
                    onChange={(e) => setIndustry(e.target.value)}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">GICS:</label>
                  <input
                    type="text"
                    placeholder="enter gics"
                    name="gics"
                    value={gics}
                    className="form-control"
                    readOnly={true}
                    onChange={(e) => setGics(e.target.value)}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Close Price:</label>
                  <input
                    type="text"
                    placeholder="Enter industry"
                    name="closePrice"
                    className="form-control"
                    value={closePrice}
                    readOnly={true}
                    onChange={(e) => setClosePrice(e.target.value)}></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Price:</label>
                  <input
                    type="text"
                    placeholder="Enter gics"
                    name="lastPrice"
                    className="form-control"
                    readOnly={true}
                    value={lastPrice}
                    onChange={(e) => setLastPrice(e.target.value)}></input>
                </div>

                <button
                  className="btn btn-success"
                  style={{ marginRight: "20px" }}
                  onClick={(e)=>{handleUpdate()}}
                  
                  >
                  
                  Submit
                </button>

                <Link to="/fetchAll" className="btn btn-danger">
                  Cancel
                </Link>
               
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default EditComponent;
