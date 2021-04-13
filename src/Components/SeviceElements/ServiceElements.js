import React from 'react';
import "./ServiceElements.css";

function ServiceElements ({onAddClick}) {
 return(
     <div className="service__elements" >
         <button onClick={onAddClick}>Add</button>
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
