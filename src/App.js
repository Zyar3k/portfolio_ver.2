import { Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import About from "./components/views/About/About";
import Contact from "./components/views/Contact/Contact";
import Skills from "./components/views/Skills/Skills";
import Portfolio from "./components/views/Portfolio/Portfolio";

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/about' exact component={About} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </MainLayout>
  );
}

export default App;
