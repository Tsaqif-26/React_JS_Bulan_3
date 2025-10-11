
import './App.css'
import FetchAxios from './components/Axios'
import FetchData from './components/FetchData'
import AbortController from './components/AbortController'
import ManipulasiJson from './components/ManipulasiJson'


function App() {


  return (
    <>
      <FetchData/>

      <FetchAxios/>

      <AbortController/>

      <ManipulasiJson/>
      
    </>
  )
}

export default App
