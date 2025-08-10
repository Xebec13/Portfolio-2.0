import Background from "./Background/Background"
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import AboutMe from "./AboutMe";


function App() {
  return (
    <>
    <Background/>
      <Nav />
      <main>
        <LandingPage />
        <Projects />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
