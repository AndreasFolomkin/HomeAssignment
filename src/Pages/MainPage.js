import React from 'react';
import Card from "../Components/ProductCard/ProductCard";
import Header from "../Components/Header/Header";
import ServiceElements from "../Components/SeviceElements/ServiceElements";

function MainPage (props) {

 return(
     <div >
         <Header/>
          <ServiceElements/>
         <Card  />
     </div>
 )
}

export default MainPage ;
