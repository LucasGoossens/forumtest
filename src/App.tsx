import { useEffect, useState } from 'react'
import './App.css'

function App() {  
const [data, setData] = useState([]);

  const getData = () => {
    fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(data =>setData(data))
    .catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {
        data.map((x) =>         
            <div>{x.id}</div>
      )
      }
    </>
  )
}

export default App
