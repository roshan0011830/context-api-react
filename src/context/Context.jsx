import {useState } from 'react'

import { createContext } from 'react';
export const productContext = createContext();

function Context({children}) {

  const[data, setData] = useState([])


  async function getApiData(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data)
    setData(data);
  }




  return (
    <productContext.Provider value={{data,getApiData}}>
      {/* <Products/> */}
      {children}
    </productContext.Provider>
  )
}

export default Context
