import "./App.css";
import { SeedProvider } from "./context/seedContext.jsx";
import Router from "./router.js";

function App() {
  return (
    <div>
      <SeedProvider>
        <Router/>
      </SeedProvider>
    </div>
  );
}

export default App;
