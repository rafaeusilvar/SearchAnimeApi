import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Carousel from "./Components/Carousel";

import Title from "./Components/Title";
// import Home from "./Pages/Home";

import API from "./Services/Api";



function App(){  
  return (  
    <div className="App">
    < Carousel />
    < Title />
    < API />
    < Main />
    < Footer /> 
    </div>
  );
}


export default App;
