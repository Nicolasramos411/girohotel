// import CssBaseline from '@mui/material/CssBaseline';
import StyledComponent from './components/Component';
import LandingPage from './components/LandingPage';
import ExaNutri from './components/ExaNutri';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { Step1, Step2, Result } from './components/Form';

createStore({});

function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/exanutri" element={<ExaNutri />} />
          {/* <Route path="/form1" element={<Step1 />} />
          <Route path="/form2" element={<Step2 />} />
          <Route path="/result" element={<Result />} /> */}
        </Routes>
      </Router>
    </StateMachineProvider>
  );
}

export default App;
