import React from 'react';

import Footer from "../components/Footer";
import Productfilter from '../components/Productfilter';



function Products(){
    return(
        <div className="products">
           
          
            <Productfilter />
            <Footer />
        </div>
    );
}
export default Products;