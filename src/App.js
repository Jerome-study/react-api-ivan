import './App.css';
import { useEffect, useState } from 'react';
import RenderList from './Render';
import axios from 'axios';
function App() {

  const [api, setApi] = useState([]);
  const [name, setName] = useState("")
  useEffect(() => {
    getData();
    
  }, [] );

  const getData = async () => {
    try {
      const result = await axios.get("https://to-do-app-1p9h.onrender.com/api/v1/tasks");
      setApi(result.data);
    } catch (error) {
      console.log(error)
    }
    
  };
  
  const addName = async (e) => {
    try {
    await axios.post("https://to-do-app-1p9h.onrender.com/api/v1/tasks", {name} );
    window.location.reload();
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div>
      <h1>API Ni Ivan</h1>
      <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
      <button onClick={addName}>Add</button>

      {api.map((data, index) => {
        return < RenderList key={index} data={data} api={api} setApi={setApi}  />
      })}
    </div>
  )
}



export default App;
