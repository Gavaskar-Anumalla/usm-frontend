import React from "react";
import "./Pagination.css";
import { Button } from "react-bootstrap";

const Pagination = ({
  totalPharmacies,
  pharmaciesPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPharmacies / pharmaciesPerPage); i++) {
    pages.push(i);
  }

  const pageEventHandler = (e) => {
    console.log(e.target.value);
    setCurrentPage(e.target.value);
  };
  return (

    <div className="pagination">
        
        <div>
        <button onClick={() => setCurrentPage(()=>{
           if(currentPage===1){
            return 1
           }
           else return currentPage-1;
})}>Prev</button>
            <button onClick={() => setCurrentPage((currentPage+1))}>Next</button>
        </div>
      {pages.map((page, index) => {
        return (
          <div className="down">
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? "active" : ""}
            >
              {page}
            </button>
            
          </div>
        );

      })}
      
        <Button className="" onClick={() => setCurrentPage((currentPage+1))}>Next</Button>

    </div>
  );
};

export default Pagination;
