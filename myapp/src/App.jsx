import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route,Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Welcome2 from './components/Welcome2'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Signup2 />*/}
      <Navbar />
      <Routes>
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/l" element={<Login />} />
        <Route path="/state" element={<StateBasics />} />
        <Route path="/welcome" element={<Welcome2 />} />
        <Route path="/a" element={<Api />} />
        </Routes>
    </>
  )
}

export default App
