import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from './pages/home'
import Login from './pages/login'
import UserLogin from './pages/userLogin'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <div className='page-content'>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userLogin' element={<UserLogin />} />
        </Routes>
        <Footer />
        </div>
    </Router>
  )
}

export default App
