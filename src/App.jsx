import "./App.css";
import React,{useState} from "react";
import Search from "./components/Search";
import Result from "./components/Result";


function App() {
  const [link, setLink] = useState('');
  const result = (data) => {
    setLink(data);
  }


  return (
    <div className="App">
      <div className="headContainer">
        <h1 className="heading">e69 Shortner</h1>
      </div>
      <Search Result={result} />
      {link === '' ? null :<Result Result={ link } />}
      
    </div>
  );
}

export default App;
