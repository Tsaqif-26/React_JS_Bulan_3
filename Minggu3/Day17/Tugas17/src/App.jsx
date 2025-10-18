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

function App() {

  return (
   <>

    <div>
      <nav>
        <ul>
          <li>
            <Link to='/' >Beranda(Link)</Link>
          </li>
          <li>
            <NavLink to='/about' className={({isActive}) => (isActive ? 'Link Aktif' : 'Nonaktif')}>Tentang(NavLink)</NavLink>
          </li>
          <li>
            <NavLink to='/contact' style={
              ({isActive}) => ({
                color: isActive ? 'green' : 'red',
                fontWeight: isActive ? 'bold' : 'normal'
              })
            }>Kontak(NavLink + Style)</NavLink>
          </li>
        </ul>
      </nav>
    </div>
     <div>

      <h2>Multi-Page Application dengan React Router</h2>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>

        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />
      </Route>

      </Routes>
     </div>
   </>
  )
}

export default App
