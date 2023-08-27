import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
