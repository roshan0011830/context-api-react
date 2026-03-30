import React, { useEffect } from "react";
import { productContext } from "../context/Context.jsx";

import { useContext } from "react";

function Products() {
const {getApiData} = useContext(productContext)

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <h1>I Am Products</h1>
    </div>
  );
}

export default Products;
