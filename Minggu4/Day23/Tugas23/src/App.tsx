import React, { useState } from 'react'
import './App.css'
import FokusInput from './components/Input'
import Modal from './components/Modal'
import withLoading from './components/Loading'
import UserInfo from './components/UserInfo'
import MouseTracker from './components/MouseTracker'
import Toggle from './components/Toggle'

const UserWithLoading = withLoading(UserInfo)

function App() {

      const[modalOpen, setModalOpen] = useState(false)
      
      const [loading, setLoading] = useState(true)

      React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000)
        
        return () => clearTimeout(timer)
      },[])

  return (
      <>
        <FokusInput/> <br /> <hr />

        <div>
            <h2>React Portal Modal</h2>

      <button onClick={() => setModalOpen(true)}>Buka</button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>Hola! ini portal modal</h3>
        <p>Modal ini muncul di luar elemen utama.</p>
      </Modal>  
        </div><br /> <hr />

     <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>HOC</h2>
     
        <UserWithLoading loading={loading} name="kyou" />
    </div> <br /> <hr />


    <div>
        <h2>Render props pattern</h2>

        <MouseTracker render={({x, y}) => (
          <h3>
            Posisi Mouse <b>{x}</b>, <b>{y}</b>
          </h3>
        )}/>


        <Toggle render={({on, toggle}) => (
          <div>
              <button onClick={toggle}>
                  {on ? "Matikan" : "Hidupkan"}  
              </button>  

              <h3>Status: {on ? "Hidup" : "Mati"}</h3>
          </div>
        )}/>
    </div>
      </>
  )
}

export default App
