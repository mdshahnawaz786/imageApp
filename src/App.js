import { createContext, useEffect, useState } from 'react';
import './App.css';
import Dispaly from './Dispaly';


export const myContext = createContext()

function App() {
  const [state, setstate] = useState("");
  const [search, setSearch] = useState("");
  const [apiData, setapiData] = useState([]);


  
  useEffect(() => {
    apiFetching();
  },[state]);



  async function apiFetching() {
    const res = await fetch(
      `https://api.unsplash.com/search/collections?per_page=20&page=1&query=${state ? state :"nature"}&client_id=_S2-pqjdmKE_x2h_6qHeJ7msoQ1VCuL_9lgVt-3fmDk`
    );
    const text = await res.text();
    const data = JSON.parse(text);
    setapiData(data.results);
  }


  return (
    <div className="App">
     <h1 className="h1" style={{textAlign:"center",color:"gray"}}>IMAGE SEARCH</h1>
     <div className='input_container'>
      <input value={search} type='text' placeholder='search' onChange={(e) => {
            setSearch(e.target.value);
          }}/>
      <button  onClick={() => {
            setstate(search);
            console.log(apiData);
          }}>search</button>
     </div>

     <myContext.Provider value={{apiData}}>
      <Dispaly/>
     </myContext.Provider>
    </div>
  );
}

export default App;
