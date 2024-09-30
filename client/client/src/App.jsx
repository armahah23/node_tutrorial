// import { useState } from 'react'

import { Login } from "./components/login"
import Signup from "./components/Signup"



function App() {
  // const [data, setData] = useState(null);
  // fetch('http://localhost:3000')
  //   .then(response => response.json())
  //   .then(data => setData(data));

  return (
    <>
      <Login />
      <br />
      <Signup />
        
    </>
  )
}

export default App
