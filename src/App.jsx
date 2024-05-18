import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './pages/home'
import Login from './pages/login'
import Details from './pages/details'
import Admin from './pages/admin'
import Auth from './pages/auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
