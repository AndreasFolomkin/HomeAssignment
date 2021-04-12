import React from 'react';
import "./ServiceElements.css";

function ServiceElements (props) {
 return(
     <div className="service__elements" >
         <button>Add</button>
         <input type="search"/>
         <label htmlFor="sort">Sorted by:</label>
         <select name="sort" id="sort">
             <option value="name">Name</option>
             <option value="date">Recently Added</option>
         </select>
     </div>
 )
}

export default ServiceElements ;
