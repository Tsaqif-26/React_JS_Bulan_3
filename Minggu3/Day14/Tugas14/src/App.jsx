import './App.css'
import { useContext } from 'react'
import { LanguageContext, LanguageProvider } from './components/LanguageContext'
import { NotifContext, NotifProvider } from './components/NotifContext'
import ThemeProvider from './components/ThemeProvider'
import Content from './components/Content'
import { UserProvider } from './components/UserContext'
import UserProfile from './components/UserProfile'
import CartDisplay from './components/CartDisplay'
import { CartProvider } from './components/CartContext'
import ProductList from './components/ProductList'

function Header() {
  const {language, toggleLanguage} = useContext(LanguageContext)
  const {count, addNotif, clearNotif} = useContext(NotifContext)

  return(
    <div>
      <h2>Bahasa: {language}</h2>

      <button onClick={toggleLanguage}>Ubah Bahasa</button>

      <h3>Notifikasi: {count}</h3>
      <button onClick={addNotif}>Tambah Notifikasi</button>
      <button onClick={clearNotif}>Hapus Notifikasi</button>
    </div>
  )
}

function App() {
  

  return (
    <>
      <UserProvider>
        <div>
          <h2>Context Provider Sederhana</h2>
          <UserProfile/>
        </div>
      </UserProvider> <br /> <br />

    <h2>Theme Context</h2>
      <ThemeProvider>
        <Content/>
      </ThemeProvider> <br /> <br />

    <h2>Multiple Context</h2>
      <LanguageProvider>
        <NotifProvider>
          <Header/>
        </NotifProvider>
      </LanguageProvider> <br /> <br />

      <CartProvider>
      <h1>Shopping Cart dengan Context API</h1>
      <ProductList />
      <hr />
      <CartDisplay />
    </CartProvider>
    </>
  )
}

export default App
