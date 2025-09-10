import { LandingPage, Nav, Projects, Spacer,Contact } from "./components";
import Background from "./styles/Background/Background";


function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <LandingPage />
        <Spacer />
        <Projects />
        <Spacer />
        <Contact />
      </main>
    </>
  );
}

export default App;
