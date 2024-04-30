import "./App.css";
import { SeedProvider } from "./context/seedContext.jsx";
import Router from "./router.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
