import Background from "./Background/Background"
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import Projects from "./Projects";

import Contact from "./Contact"
import Spacer from "./Spacer"


function App() {
  return (
    <>
    <Background/>
      <Nav />
      <main>
        <LandingPage />
        <Spacer/>
        <Projects />
        <Spacer/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
