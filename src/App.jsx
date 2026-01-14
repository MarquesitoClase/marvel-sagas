import Batman from "./components/Batman/Batman.jsx";
import Hulk from "./components/Hulk/Hulk.jsx";
import Spiderman from "./components/Spiderman/Spiderman.jsx";
import "./Styles/Batman.css";
import "./Styles/Hulk.css";
import "./Styles/Spiderman.css";
import "./Styles/Card.css";

//Son marvel y el caballero negro de DC aunque se llame así el proyecto
function App() {
  return (
    <div>
      <Batman />
      <Hulk />
      <Spiderman />
    </div>
  );
}

export default App;
