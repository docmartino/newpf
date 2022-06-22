import "./style/App.css";

import HomePage from "./pages/HomePage";
import PersoPage from "./pages/PersoPages";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <nav>
        <a href="#homePage">Home</a>
        <a href="#persoPage">Me</a>
        <a href="#worksPage">Works</a>
        <a href="#contactPage">Contact</a>

      </nav>
      <div className="scroll-container">
        <HomePage />
        <PersoPage />
        <WorksPage />
        <ContactPage />
      </div>
    </>
  );
}

export default App;
