import ButtonClicker from "./components/EventHandling";
import LinkPreventer from "./components/SyntheticEvent";
import Nameform from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";
import Validationform from "./components/Validation";


export default function App() {
    return (
      < >
        <ButtonClicker />

        <LinkPreventer />

        <Nameform/> 

        <UncontrolledComponent/>

        <Validationform/>
      </>
    )
}

