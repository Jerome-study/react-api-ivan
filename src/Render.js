import axios from 'axios';

export default function RenderList (props) {
    const scratchName = async (e) => {
      await axios.patch(`https://to-do-app-1p9h.onrender.com/api/v1/tasks/${e.target.id}`, {
        completed: props.data.completed? false: true
  
      })
      window.location.reload();
    }
  
    const deleteName = async (e) => {
      try {
        await axios.delete(`https://to-do-app-1p9h.onrender.com/api/v1/tasks/${e.target.id}`)
        window.location.reload();
      } catch(err) {
        console.log(err.message)
      }
       
    }
  
      return(
        <div>
          <h1  style={{textDecoration: props.data.completed?"line-through": "unset"}}>name: {props.data.name}</h1>
          <button id={props.data._id} onClick={deleteName}>Delete</button>
          <button id={props.data._id} onClick={scratchName}>Done</button>
        </div>
      )
  }