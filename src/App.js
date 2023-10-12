import "./App.css";
import {
  CheckStatus,
  Contact,
  DiversityVisa,
  Footer,
  Header,
  Hero,
  OurJobs,
} from "./component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneNumber from "./component/PhoneNumber/PhoneNumber";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <Header home />
              <Hero />
              <DiversityVisa />
              <OurJobs />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/check" element={<CheckStatus />} />
        <Route path="/start" element={<PhoneNumber />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
