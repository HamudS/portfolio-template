import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Testimonials />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
