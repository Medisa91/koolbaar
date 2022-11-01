import "styles/app.scss";
import "styles/global.scss";
import "styles/responsive.scss";
import "react-datepicker/dist/react-datepicker.css";
import "photoswipe/dist/photoswipe.css";
import "./i18n";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Dashboard } from "pages";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
