import "./App.css";
import * as React from 'react';
import { Products } from "./products";
import { SliderData } from "./sliderData";

function App() {

  return <Products slides={SliderData}/>
}

export default App;
