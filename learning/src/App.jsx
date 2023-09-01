import './App.css'
import {Home} from './components/Home';
import HomeClass from './components/HomeClass'
import About from './components/About'
import AboutClass from './components/AboutClass';
import LifeCycleComponent from './components/LifeCycleComponent'
import RenderingComponent from './components/RenderingComponent';
import DesignComponent from './components/DesignComponent';
function App() {

  return(
   <>
   <About name="App component" work ="parent component"/>
   <AboutClass name="App component" work ="parent component"/>
   <LifeCycleComponent name="App component" work = "Parent component"/>
   <RenderingComponent name ="App component" work ="Parent component"/>
   <DesignComponent name ="App component" work ="Parent component"/>
   </>
   
  );
}

export default App;