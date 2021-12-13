import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import API from "./Services/Api";

function App(){  
  return (  
    <div className="App">
    < Home />
    < API />
    < Main />
    < Footer /> 
    </div>
  );
}


export default App;
