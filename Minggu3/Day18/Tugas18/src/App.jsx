import './App.css'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Products from './components/Products.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile.jsx'
import Setting from './components/Setting.jsx'
import Login from './components/Login.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import NotFound from './components/ErrorPage.jsx'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><NavLink to="/about">Tentang</NavLink></li>
          <li><NavLink to="/contact">Kontak</NavLink></li>
          <li><NavLink to="/products">Produk</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>

      <h2>Multi-Page App dengan Protected Routes</h2>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="/login" element={<Login/>}/>


        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }>
          <Route path="profile" element={<Profile/>}/>
          <Route path="setting" element={<Setting/>}/>
        </Route>

        <Route path='*' element={<NotFound/>} />
      </Routes>

    </>
  )
}

export default App
