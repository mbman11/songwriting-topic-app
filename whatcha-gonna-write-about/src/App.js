import "./App.css";
import Navbar from "./components/Navbar";
import RandomGenSection from "./components/RandomGenSection";
import TextBox from "./components/TextBox";
import Tips from "./components/Tips";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <RandomGenSection />
        <TextBox/>
        <Tips/>
      </div>
    </div>
  );
}

export default App;
