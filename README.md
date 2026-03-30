# 🔥 React Context API — Complete Guide (Step-by-Step)

Agar tumne ye README dhang se samajh li, to Context API kabhi confuse nahi karega.  
Yeh ekdum clear flow + real-world approach me likha gaya hai.

---

# 🧠 Context API kya hai?

Context API ek tarika hai jisse hum data ko globally share kar sakte hain  
👉 bina prop drilling ke (props ko baar-baar pass kiye bina)

### 📌 Use cases:
- Products data
- User authentication
- Theme (dark/light mode)

---

# 🚀 Step-by-Step Implementation

---

## ✅ Step 1: Context Folder banao

---

## ✅ Step 2: Context create karo

```jsx
import { createContext } from "react";

/*
🔥🔥 IMPORTANT YAAD RAKHNA 🔥🔥

createContext() hamesha component ke BAHAR likhna hai

❌ Galat:
function Context(){
  const productContext = createContext();
}

✅ Sahi:
file ke top par likho (component ke bahar)
*/

export const productContext = createContext();

---

## ✅ Step 3: Context Provider Component banao

```jsx
import React, { useEffect, useState } from "react";
import { productContext } from "./Context";

function Context({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    };
    getApiData();
  }, []);

  return (
    <productContext.Provider value={{ data }}>
      {children}
    </productContext.Provider>
  );
}

export default Context;



---

## ✅ Step 4: App ko wrap karo
import Context from "./context/Context";
import App from "./App";

/*
🔥🔥 MOST IMPORTANT STEP 🔥🔥

Agar App ko Context se wrap nahi kiya,
to useContext() kabhi kaam nahi karega ❌
*/

<Context>
  <App />
</Context>



---

## ✅ Step 5: Data use karo (Consumer side)
import { useContext } from "react";
import { productContext } from "../context/Context";

function Products() {
  const { data } = useContext(productContext);

  console.log(data);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

export default Products;

/*
🔥 IMPORTANT YAAD RAKHNA 🔥

Agar tumne value={{ data }} diya hai,
to yaha destructuring karna padega:

✅ const { data } = useContext(productContext);

❌ const data = useContext(productContext);
*/
