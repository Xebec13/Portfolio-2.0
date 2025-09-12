import { LandingPage, Nav, Projects, Contact } from "./components";
import Background from "./styles/background/Background";

function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <LandingPage />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
