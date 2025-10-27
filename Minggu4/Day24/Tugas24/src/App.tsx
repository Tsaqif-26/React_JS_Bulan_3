import './App.css'
import "./index.css";
import BasicForm from './components/BasicForm'
import MultiStepForm from './components/MultiStepData'
import DynamicForm from './components/DynamicForm';
import UploadForm from './components/UploadForm';

function App() {

  return (
  <>
    <BasicForm/>

    <MultiStepForm/>

    <DynamicForm/>

    <UploadForm/>
  </>
  )
}

export default App
