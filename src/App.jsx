import Batman from "./components/Batman/Batman.jsx";
import Aquaman from "./components/Aquaman/Aquaman.jsx";
import Spiderman from "./components/spiderman/spiderman.jsx";
import Hulk from "./components/hulk/hulk.jsx";
import Ironman from "./components/Ironman/Ironman.jsx";
import "./Styles/Batman.css";
import "./Styles/Hulk.css";
import "./Styles/Spiderman.css";
import "./Styles/Aquaman.css";
import "./Styles/Ironman.css";
import "./Styles/Card.css";

function App() {
  return (
    <div>
      <Batman />
      <Spiderman />
      <Hulk />
      <Aquaman />
      <Ironman />
    </div>
  );
}

export default App;
