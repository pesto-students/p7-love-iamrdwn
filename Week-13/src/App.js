import "./styles.css";

import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}
