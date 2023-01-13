import logo from './logo.svg';
import './App.css';
import { Products } from './products';
import { SliderData } from './sliderData';


function App() {
  const title = ' Welcome to the Task ';
  return <Products slides={SliderData}/>
}

export default App;
